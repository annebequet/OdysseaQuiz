import React, { Component } from "react";
import request from "superagent";
import { CometSpinLoader } from "react-css-loaders";
import { styles } from "./styles";

// TODO allow deactivation of localstorage (for dev)
// TODO clean first level props structure (no `data`)
// TODO allow styles overwride
// TODO make radio/checkbox text clickable

class ReactSurvey extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentQuestion: null,
      remainingQuestions: [...props.data.questions],
      ended: false,
      displayWelcomeMessage: true,
      displayGoodbyeMessage: false,
      globalLoading: false,
      globalError: false,
      folded: false,
      answers: [],
      hidden: true,
    };

    this.answerQuestion = this.answerQuestion.bind(this);
    this.endSurvey = this.endSurvey.bind(this);
    this.foldSurvey = this.foldSurvey.bind(this);
    this.unfoldSurvey = this.unfoldSurvey.bind(this);
  }

  componentWillMount() {
    const surveyDone = JSON.parse(localStorage.getItem("surveyDone"));
    const surveyState = JSON.parse(localStorage.getItem("surveyState"));

    if (!surveyDone) {
      if (surveyState && surveyState.answers.length) {
        this.setState(surveyState);
      } else {
        this.setCurrentQuestion();
        setTimeout(() => {
          this.setState({
            hidden: false,
          });
        }, this.props.data.timeBeforePopUp * 1000);
      }
    }
  }

  foldSurvey() {
    this.setState({
      folded: true,
    });
  }

  unfoldSurvey() {
    this.setState({
      folded: false,
    });
  }

  setCurrentQuestion() {
    let remainingQuestions = this.state.remainingQuestions;
    let currentQuestion;
    if (this.props.data.random) {
      const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
      currentQuestion = remainingQuestions[randomIndex];
      remainingQuestions = remainingQuestions.filter(
        (q, i) => i !== randomIndex
      );
    } else {
      currentQuestion = remainingQuestions.shift();
    }

    this.setState({
      currentQuestion,
      remainingQuestions,
    });
  }

  answerQuestion(answer) {
    let ended = !this.state.remainingQuestions.length;
    this.setState({
      answers: [...this.state.answers, answer],
      ended,
      displayWelcomeMessage: false,
    });
    if (!ended) {
      this.setCurrentQuestion();
    }
  }

  endSurvey({ email, comment }) {
    const survey = {
      email,
      comment,
      answers: this.state.answers,
      id: this.props.data.id,
    };
    this.setState({
      globalLoading: true,
    });

    request
      .post(this.props.data.postUrl)
      .send({
        survey,
        authenticity_token: this.props.data.csrfToken,
      })
      .end((err, res) => {
        if (err) {
          console.warn(err);
          this.setState({
            globalLoading: false,
            globalErrorMessage: err.message,
          });
        } else {
          console.log(res.body);
          this.setState({
            displayGoodbyeMessage: true,
            globalLoading: false,
          });
        }
      });
  }

  closeSurvey() {
    document.getElementById("rs-parent").style.display =
      styles.hiddenStyle.display;
    localStorage.setItem("surveyDone", "true");
  }

  render() {
    console.log(this.state);

    if (JSON.parse(localStorage.getItem("surveyDone"))) {
      return <div style={styles.hiddenStyle} />;
    }

    localStorage.setItem("surveyState", JSON.stringify(this.state));

    if (this.state.globalErrorMessage) {
      return (
        <div id="rs-parent" style={styles.boxStyle}>
          <p>{this.state.globalErrorMessage}</p>
          <EndButton
            onClick={this.closeSurvey}
            text={this.props.data.messages.closeMessage}
          />
        </div>
      );
    }

    const boxPlusFoldStyle = { ...styles.boxStyle, ...styles.foldedStyle };
    console.log(boxPlusFoldStyle);
    return (
      <div id="rs-parent" style={this.state.hidden ? styles.hiddenStyle : null}>
        <div style={this.state.folded ? boxPlusFoldStyle : styles.boxStyle}>
          <div className="heading" style={styles.heading}>
            <DisplayButtons
              foldSurvey={this.foldSurvey}
              unfoldSurvey={this.unfoldSurvey}
              folded={this.state.folded}
            />
            <p className="title" style={styles.heading.title}>
              {this.props.data.name}
            </p>
            {this.state.displayWelcomeMessage ? (
              <p className="description" style={styles.heading.description}>
                {this.props.data.messages.welcomeMessage}
              </p>
            ) : null}
          </div>
          {this.state.globalLoading ? (
            <CometSpinLoader />
          ) : this.state.displayGoodbyeMessage ? (
            <div>
              <p>{this.props.data.messages.endingMessage}</p>
              <EndButton
                onClick={this.closeSurvey}
                text={this.props.data.messages.closeMessage}
              />
            </div>
          ) : this.state.ended ? (
            <End
              data={this.props.data.ending}
              onSubmit={this.endSurvey}
              messages={this.props.data.messages}
            />
          ) : (
            <Question
              data={this.state.currentQuestion || {}}
              onSubmit={this.answerQuestion}
              messages={this.props.data.messages}
            />
          )}
        </div>
      </div>
    );
  }
}

const EndButton = props => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const End = props => {
  const { text, email, freeSpeech } = props.data;
  let comment, userEmail;
  return (
    <div>
      <p>{text}</p>
      <form
        onSubmit={e => {
          e.preventDefault();
          props.onSubmit({
            email: userEmail,
            comment,
          });
        }}
      >
        {freeSpeech ? (
          <textarea onChange={e => (comment = e.target.value)} />
        ) : (
          ""
        )}
        {email ? (
          <input
            onChange={e => (userEmail = e.target.value)}
            placeholder="email"
          />
        ) : (
          ""
        )}
        <button type="submit">{props.messages.endMessage}</button>
      </form>
    </div>
  );
};

class Question extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
    };
  }

  render() {
    const { text, choices, multiple, id, required } = this.props.data;
    let answers = [];
    return (
      <div className="question">
        <p className="question-text" style={styles.question.text}>
          {text}
        </p>
        <form
          onSubmit={e => {
            e.preventDefault();
            if (!answers.length && required) {
              this.setState({
                error: true,
              });
              return;
            }
            this.setState({
              error: false,
            });
            document.querySelectorAll(".choice").forEach(node => {
              node.checked = false;
            });
            this.props.onSubmit({
              answers,
              id,
            });
          }}
        >
          {choices ? (
            choices.map((c, i) => (
              <div key={i}>
                <input
                  className="choice"
                  data-question-id={id}
                  type={multiple ? "checkbox" : "radio"}
                  value={c.id}
                  onClick={e => {
                    const answer = e.target.value;
                    if (answers.includes(answer)) {
                      answers.filter(a => a !== e.target.value);
                    } else {
                      answers.push(answer);
                    }
                  }}
                />
                <span>{c.text}</span>
              </div>
            ))
          ) : (
            []
          )}
          <button
            type="submit"
            style={{ ...styles.buttons.basic, ...styles.buttons.next }}
          >
            {this.props.messages.nextMessage}
          </button>
          {this.state.error ? <p>{this.props.messages.errorMessage}</p> : ""}
        </form>
      </div>
    );
  }
}

const DisplayButtons = props => {
  return (
    <div style={styles.displayControl.layout}>
      {props.folded ? (
        <button
          style={styles.displayControl.buttons}
          onClick={props.unfoldSurvey}
        >
          +
        </button>
      ) : (
        <button
          style={styles.displayControl.buttons}
          onClick={props.foldSurvey}
        >
          -
        </button>
      )}
    </div>
  );
};

export default ReactSurvey;
