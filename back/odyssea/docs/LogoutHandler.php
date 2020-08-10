<?php

namespace App\Security;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Http\Logout\LogoutSuccessHandlerInterface;

class LogoutHandler implements LogoutSuccessHandlerInterface
{
    /**
     * Creates a Response object to send upon a successful logout.
     * 
     * @todo Passer le token à null en BDD pour invalider le token
     *
     * @return Response never null
     */
    public function onLogoutSuccess(Request $request) {

        return new JsonResponse([
            'message' => 'User disconnected.',
        ]);
    }
}
