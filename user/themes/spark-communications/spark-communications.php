<?php
namespace Grav\Theme;

use \Grav\Common\Theme;
use \Grav\Common\Grav;

class SparkCommunications extends Theme
{
    /**
     * Get the team members for the blog blueprint.
     *
     * Creates an associative array of slugs and full names to populate the
     * author dropdown select in the Admin when editing a blog post.
     *
     * @return array
     */
    public function getTeamMembers() {
        $page = Grav::instance()['page'];
        $teamMembers = $page->evaluate(['@page.children' => '/team']);
        $length = $teamMembers->count();
        $options = array();

        for($i = 0; $i < $length; $i++) {
            $current = $teamMembers->current();
            $options[$current->route()] = $current->title();
            $teamMembers->next();
        }

        return $options;

    }
}
