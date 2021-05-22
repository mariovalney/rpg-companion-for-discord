<?php

return [
    '401' => 'Você não vai passar!',
    '403' => 'Você não vai passar!',
    '404' => [
        'title' => 'Cadê meu escudo?',
        'text'  => 'Página não encontrada: confira o link que você clicou ou vá até a %s.',
        'link' => 'página inicial',
    ],
    '419' => [
        'title' => 'Você chegou tarde',
        'text'  => 'A página expirou: regarregue a página ou vá até a %s.',
        'link' => 'página inicial',
    ],
    '429' => [
        'title' => 'Sem ataque extra',
        'text'  => 'Muitas requisições: espere um pouco e tente novamente.',
    ],
    '500' => [
        'title' => 'Falha crítica',
        'text'  => 'Não vale ataque de oportunidade: regarregue e tente novamente.',
    ],
    '503' => [
        'title' => 'Mesa indisponível',
        'text'  => 'O mestre deu uma saída (ou morreu): regarregue e tente novamente.',
    ],
    'login' => [
        'text'  => 'Volte para a sombra! Ou %s novamente.',
        'link' => 'faça login',
    ],
    'maintenance' => [
        'code' => 'OPS',
        'title' => 'Anões trabalhando!',
        'text'  => 'Estamos em manutenção: volte mais tarde.',
        'joke'  => 'E traga cerveja!',
    ],
];
