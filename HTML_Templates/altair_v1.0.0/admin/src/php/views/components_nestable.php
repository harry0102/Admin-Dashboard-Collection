<?php defined('safe_access') or die('Restricted access!'); ?>

    <div id="page_content">
        <div id="page_content_inner">

            <h3 class="heading_b uk-margin-medium-bottom">Nestable</h3>

            <h4 class="heading_a">
                Serialize (Local Storage)
                <span class="sub-heading">Refresh page after changing order of this nestable panels to see this example on action.</span>
            </h4>
            <div class="uk-grid" data-uk-grid-margin>
                <div class="uk-width-1-1">
                    <ul class="uk-nestable" id="nestable">
                        <li data-id="1" class="uk-nestable-item">
                            <div class="uk-nestable-panel">
                                Item 1 <br/>
                                <span class="uk-text-muted uk-text-small"><?php echo $faker->sentence(20); ?></span>
                            </div>
                        </li>
                        <li data-id="2" class="uk-nestable-item">
                            <div class="uk-nestable-panel">
                                Item 2 <br/>
                                <span class="uk-text-muted uk-text-small"><?php echo $faker->sentence(20); ?></span>
                            </div>
                        </li>
                        <li data-id="3" class="uk-nestable-item">
                            <div class="uk-nestable-panel">
                                Item 3 <br/>
                                <span class="uk-text-muted uk-text-small"><?php echo $faker->sentence(20); ?></span>
                            </div>
                        </li>
                        <li data-id="4" class="uk-nestable-item">
                            <div class="uk-nestable-panel">
                                Item 4 <br/>
                                <span class="uk-text-muted uk-text-small"><?php echo $faker->sentence(20); ?></span>
                            </div>
                        </li>
                        <li data-id="5" class="uk-nestable-item">
                            <div class="uk-nestable-panel">
                                Item 5 <br/>
                                <span class="uk-text-muted uk-text-small"><?php echo $faker->sentence(20); ?></span>
                            </div>
                        </li>
                        <li data-id="6" class="uk-nestable-item">
                            <div class="uk-nestable-panel">
                                Item 6 <br/>
                                <span class="uk-text-muted uk-text-small"><?php echo $faker->sentence(20); ?></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <h4 class="heading_a">Nestable handle</h4>
            <div class="uk-grid" data-uk-grid-margin>
                <div class="uk-width-1-1">
                    <ul class="uk-nestable" data-uk-nestable="{handleClass:'uk-nestable-handle'}">
                        <li class="uk-nestable-item">
                            <div class="uk-nestable-panel">
                                <i class="uk-nestable-handle material-icons">&#xE5D2;</i>
                                Item 1
                            </div>
                        </li>
                        <li class="uk-nestable-item">
                            <div class="uk-nestable-panel">
                                <i class="uk-nestable-handle material-icons">&#xE5D2;</i>
                                Item 2
                            </div>
                        </li>
                        <li class="uk-nestable-item">
                            <div class="uk-nestable-panel">
                                <i class="uk-nestable-handle material-icons">&#xE5D2;</i>
                                Item 3
                            </div>
                        </li>
                        <li class="uk-nestable-item">
                            <div class="uk-nestable-panel">
                                <i class="uk-nestable-handle material-icons">&#xE5D2;</i>
                                Item 4
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <h4 class="heading_a">Nestable toggle</h4>
            <div class="uk-grid" data-uk-grid-margin>
                <div class="uk-width-1-1">
                    <ul class="uk-nestable" data-uk-nestable>
                        <li class="uk-nestable-item">
                            <div class="uk-nestable-panel">
                                <div class="uk-nestable-toggle" data-nestable-action="toggle"></div>
                                Item 1
                            </div>
                            <ul>
                                <li class="uk-nestable-item">
                                    <div class="uk-nestable-panel">
                                        <div class="uk-nestable-toggle" data-nestable-action="toggle"></div>
                                        Item 2
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li class="uk-nestable-item">
                            <div class="uk-nestable-panel">
                                <div class="uk-nestable-toggle" data-nestable-action="toggle"></div>
                                Item 3
                            </div>
                        </li>
                        <li class="uk-nestable-item">
                            <div class="uk-nestable-panel">
                                <div class="uk-nestable-toggle" data-nestable-action="toggle"></div>
                                Item 4
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <h4 class="heading_a">Multiple lists</h4>
            <div class="uk-grid uk-grid-width-1-1 uk-grid-width-medium-1-3" data-uk-grid-margin>
                <div>
                    <ul class="uk-nestable" data-uk-nestable="{group:'my-group'}">
                        <li class="uk-nestable-item">
                            <div class="uk-nestable-panel">
                                Item 1-1
                            </div>
                        </li>
                        <li class="uk-nestable-item">
                            <div class="uk-nestable-panel">
                                Item 1-2
                            </div>
                        </li>
                        <li class="uk-nestable-item">
                            <div class="uk-nestable-panel">
                                Item 1-3
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul class="uk-nestable" data-uk-nestable="{group:'my-group'}">
                        <li class="uk-nestable-item">
                            <div class="uk-nestable-panel">
                                Item 2-1
                            </div>
                        </li>
                        <li class="uk-nestable-item">
                            <div class="uk-nestable-panel">
                                Item 2-2
                            </div>
                        </li>
                        <li class="uk-nestable-item">
                            <div class="uk-nestable-panel">
                                Item 2-3
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul class="uk-nestable" data-uk-nestable="{group:'my-group'}">
                        <li class="uk-nestable-item">
                            <div class="uk-nestable-panel">
                                Item 3-1
                            </div>
                        </li>
                        <li class="uk-nestable-item">
                            <div class="uk-nestable-panel">
                                Item 3-2
                            </div>
                        </li>
                        <li class="uk-nestable-item">
                            <div class="uk-nestable-panel">
                                Item 3-3
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
