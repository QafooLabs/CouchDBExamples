<?php

/** @Document */
class tweet
{
    /**
     * @Id
     */
    private $id;

    /**
     * @Index
     * @Field(type="string")
     */
    private $user;

    /**
     * @Field(type="string")
     */
    private $text;

    public function setUser($user)
    {
        $this->user = $user;
    }

    public function setText($text)
    {
        $this->text = $text;
    }
}
