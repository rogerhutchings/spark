<?php
namespace Grav\Plugin;

use Grav\Common\Plugin;
use RocketTheme\Toolbox\Event\Event;

/**
 * Class EncodeAddressStringPlugin
 * @package Grav\Plugin
 */
class EncodeAddressStringPlugin extends Plugin
{
    /**
     * @return array
     *
     * The getSubscribedEvents() gives the core a list of events
     *     that the plugin wants to listen to. The key of each
     *     array section is the event that the plugin listens to
     *     and the value (in the form of an array) contains the
     *     callable (or function) as well as the priority. The
     *     higher the number the higher the priority.
     */
    public static function getSubscribedEvents()
    {
        return [
            'onPluginsInitialized' => ['onPluginsInitialized', 0]
        ];
    }

    /**
     * Initialize the plugin
     */
    public function onPluginsInitialized()
    {
        // Don't proceed if we are in the admin plugin
        if ($this->isAdmin()) {
            return;
        }

        // Enable the main event we are interested in
        $this->enable([
            'onTwigInitialized' => ['onTwigInitialized', 0]
        ]);
    }

    /**
     * Add simple `encodeAddressString` Twig function
     */
    public function onTwigInitialized()
    {
        $this->grav['twig']->twig()->addFunction(
            new \Twig_SimpleFunction('encodeAddressStrings', [$this, 'encodeAddressStrings'])
        );
    }

    /**
     * Used by the Twig function to componse an encoded address string from one
     * or more strings.
     *
     * @return string
     */
    public function encodeAddressStrings()
    {

        $strings = func_get_args();

        if (!count($strings)) {
            throw new \RuntimeException('No strings passed to encodeAddressStrings Twig function.');
        }

        $formattedStringArray = [];

        foreach ($strings as $string) {
            $splitString = preg_split('/$\R?^/m', $string);
            $splitString = array_map('trim', $splitString);
            $formattedStringArray = array_merge($formattedStringArray, $splitString);
        }

        $formattedString = implode(', ', $formattedStringArray);
        $encodedString = urlencode($formattedString);
        return $encodedString;
    }
}
