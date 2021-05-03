<?php

return [
    'title'       => 'Modificadores',
    'description' => [
        'lead'     => 'Modificadores podem ser usados como variáveis na sua rolagem.',
        'examples' => 'Por exemplo, sua proeficiência pode ser usada em várias rolagens e então você só altera em um lugar, quando mudar de nível.',
    ],
    'name'        => 'Nome',
    'value'       => 'Valor',
    'initiative'  => 'Iniciativa',
    'empty'       => 'Nenhum modificador disponível.',
    'form'        => [
        'added'  => 'Modificador adicionado.',
        'edited' => 'Modificador alterado.',
        'error'  => 'Ops... falha crítica.',
    ],
    'validation'  => [
        'variable_name'  => [
            'required'   => 'O nome do modificador é obrigatório.',
            'alpha_dash' => 'O nome só pode conter letras, hífens e sublinhados.',
        ],
        'variable_value' => [
            'required' => 'O valor do modificador é obrigatório.',
            'numeric'  => 'O valor deve ser um número.',
        ],
    ],
];
