<?php

namespace App\Support\Blades;

abstract class BaseDirective
{
    /**
     * A placeholder to escaped quotes
     *
     * @var string
     */
    const PLACEHOLDER = "||||||||||||||||||||||";

    /**
     * Default parameters from directive
     *
     * @var array
     */
    private $parameters = [];

    /**
     * The constructor
     *
     * @param string $expression
     */
    public function __construct($expression)
    {
        $this->parseExpression($expression);
    }

    /**
     * Render the directive
     *
     * @return string
     */
    abstract public function render();

    /**
     * Callable from Blade::directive
     *
     * @param  string   $expression
     * @return string
     */
    final public static function callback($expression)
    {
        $directive = new static($expression);
        return $directive->render();
    }

    /**
     * Parse the expression to create parameters
     *
     * @param  string $expression
     * @return void
     */
    protected function parseExpression($expression)
    {
        $expression = str_replace("\'", self::PLACEHOLDER, $expression);

        $exploded = [];
        preg_match_all('/\'([^\']*)\'/', $expression, $exploded);
        $exploded = $exploded[1] ?? [];

        foreach ($exploded as $key => $param) {
            $param = str_replace(self::PLACEHOLDER, "'", $param);
            if (empty($param)) {
                continue;
            }

            $this->parameters[$key] = $param;
        }
    }

    /**
     * Trim a param from expression
     *
     * @param  string $parameter
     * @return void
     */
    protected function parseParameter($parameter)
    {
        $parameter = trim($parameter, " '");
        return '';
    }

    /**
     * Get a param
     *
     * @param  int $index
     * @param  string $default
     * @return string
     */
    protected function getParam($index, $default = '')
    {
        return ($this->parameters[$index] ?? '') ?: $default;
    }

    /**
     * Get a param
     *
     * @param  int $index
     * @param  string $default
     * @return string
     */
    protected function hasParam($index)
    {
        return isset($this->parameters[$index]);
    }
}
