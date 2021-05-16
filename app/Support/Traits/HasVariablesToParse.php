<?php

namespace App\Support\Traits;

use  App\Models\Variable;

trait HasVariablesToParse
{
    /**
     * Parse variables from content
     *
     * @param  string $content
     * @return string
     */
    public function parseVariables($content, $guild = '')
    {
        $variables = [];

        return preg_replace_callback('/{{2}([^{]*)}{2}/', function($matches) use (&$variables, $guild) {
            if (empty($matches) || empty($matches[1])) {
                return '';
            }

            $variable = mb_strtoupper( $matches[1] );

            if (! isset($variables[ $variable ])) {
                $value = Variable::findByName($variable, $guild);
                $value = $value ? $value->value : $matches[0];

                $variables[ $variable ] = $value;
            }

            return $variables[ $variable ];
        }, $content);
    }
}
