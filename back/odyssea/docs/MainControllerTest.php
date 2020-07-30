<?php

namespace App\Tests\Front;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class MainControllerTest extends WebTestCase
{
    public function testHome()
    {
        // On crée un client web
        $client = static::createClient();
        // On accède à l'URL / (home)
        $crawler = $client->request('GET', '/');

        // On vérifie que la réponse a un statut 2xx
        $this->assertResponseIsSuccessful();
        // On vérifie que le h1 contient le texte présent dans la home
        $this->assertSelectorTextContains('h1', 'Les films');
    }

    public function testMovieShow()
    {
        // On crée un client web
        $client = static::createClient();
        // On accède à l'URL / (home)
        $crawler = $client->request('GET', '/movie/monsters-university');

        // On vérifie que la réponse a un statut 2xx
        $this->assertResponseIsSuccessful();
        // On vérifie que le h1 contient le texte présent dans la home
        $this->assertSelectorTextContains('h1', 'Monsters University');
    }
}