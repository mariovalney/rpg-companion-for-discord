<?php

return [
    'title' => 'Modificadores',
    'name' => 'Nome',
    'value' => 'Valor',
    'initiative' => 'Iniciativa',
    'empty' => 'Nenhum modificador disponível.',
    'form' => [
        'added' => 'Modificador adicionado.',
        'edited' => 'Modificador alterado.',
        'error' => 'Ops... falha crítica.',
    ],
    'validation' => [
        'variable_name' => [
            'required' => 'O nome do modificador é obrigatório.',
            'alpha_dash' => 'O nome só pode conter letras, hífens e sublinhados.',
        ],
        'variable_value' => [
            'required' => 'O valor do modificador é obrigatório.',
            'numeric' => 'O valor deve ser um número.',
        ]
    ]
];
