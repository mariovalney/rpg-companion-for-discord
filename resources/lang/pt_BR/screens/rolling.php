<?php

return [
    'title'       => 'Rolagem',
    'title_empty' => 'Rolagem Inválida',
    'title_new'   => 'Nova Rolagem',
    'empty'       => 'Essa rolagem é inválida.',
    'preview'     => 'Veja como vai ficar:',
    'submit'      => 'Salvar',
    'delete'      => 'Remover',
    'back'        => 'Voltar',
    'form'        => [
        'title'       => [
            'label'       => 'Título',
            'placeholder' => 'Rolagem de iniciativa',
        ],
        'description' => [
            'label'       => 'Descrição',
            'placeholder' => 'Então uma luz vermelha comaça a surgir da minha mão.' . "\n" . 'Eu olho para o pobre soldado que eu fiz de alvo e de repente uma bola de fogo cruza todo o espaço em menos de 1 segundo.',
        ],
        'rolling'     => [
            'label' => 'Rolagem',
        ],
        'variables'   => [
            'placeholder' => 'Escolha um modificador para adicionar',
        ],
        'error'       => 'Ops... Não conseguimos atualizar a rolagem.',
        'success'     => 'Rolagem atualizada.',
    ],
    'validation'  => [
        'title'       => [
            'required' => 'Você precisa dar um nome para a rolagem.',
            'min'      => 'O título precisa ter pelo menos 3 caracteres.',
            'max'      => 'O título não pode passar de 250 caracteres.',
        ],
        'description' => [
            'min' => 'A descrição precisa ter pelo menos 10 caracteres.',
            'max' => 'A descrição não pode passar de 2500 caracteres.',
        ],
        'rolling' => [
            'required' => 'Sua rolagem não pode estar vazia.',
        ]
    ],
    'buttons'     => [
        'plus' => '+',
    ],
];
