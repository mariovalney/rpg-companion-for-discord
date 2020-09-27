<?php

namespace App\Support;

use Exception;
use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Contracts\Support\Jsonable;
use Illuminate\Database\Eloquent\Concerns\GuardsAttributes;
use Illuminate\Database\Eloquent\JsonEncodingException;
use Illuminate\Support\Str;

class SimpleModel implements Arrayable, Jsonable
{
    use GuardsAttributes;

    /**
     * The defaults attributes.
     *
     * @var array
     */
    protected $attributes = [];

    /**
     * Create the field filling it with array of attributes.
     *
     * @param  array  $attributes
     *
     * @return $this
     */
    public function __construct(array $attributes = [])
    {
        foreach ($this->fillableFromArray($attributes) as $key => $value) {
            if (! $this->isFillable($key)) {
                continue;
            }

            if ($this->isGuarded($key)) {
                continue;
            }

            $this->attributes[ $key ] = $value;
        }

        return $this;
    }

    /**
     * Magic method to get attributes
     *
     * @param  string $name
     * @return mixed
     */
    public function __get(string $name)
    {
        $value = $this->attributes[ $name ] ?? null;

        $accessor = 'get' . Str::studly($name) . 'Attribute';
        if (method_exists($this, $accessor)) {
            return $this->{$accessor}($value);
        }

        return $value;
    }

    /**
     * Magic method to set attributes
     *
     * @param  string  $name
     * @param  mixed  $value
     * @return void
     */
    public function __set(string $name, $value)
    {
        $mutator = 'set' . Str::studly($name) . 'Attribute';
        if (method_exists($this, $mutator)) {
            $value = $this->{$mutator}($value);
        }

        $this->attributes[ $name ] = $value;

        return $this;
    }

    /**
     * Convert the model instance to JSON.
     *
     * @param  int  $options
     * @return string
     *
     * @throws \Illuminate\Database\Eloquent\JsonEncodingException
     */
    public function toJson($options = 0)
    {
        $json = json_encode($this->toArray(), $options);

        if (JSON_ERROR_NONE !== json_last_error()) {
            throw JsonEncodingException::forModel($this, json_last_error_msg());
        }

        return $json;
    }

    /**
     * Convert the model instance to an array.
     *
     * @return array
     */
    public function toArray()
    {
        return $this->attributes;
    }
}
