//[Preview Menu Javascript]

//Project:	Materiel Admin - Responsive Admin Template
//Primary use:   This file is for demo purposes only.

$(function () {
  'use strict'

  /**
   * Get access to plugins
   */

  $('[data-toggle="control-sidebar"]').controlSidebar()
  $('[data-toggle="push-menu"]').pushMenu()

  var $pushMenu       = $('[data-toggle="push-menu"]').data('lte.pushmenu')
  var $controlSidebar = $('[data-toggle="control-sidebar"]').data('lte.controlsidebar')
  var $layout         = $('body').data('lte.layout')

  /**
   * List of all the available skins
   *
   * @type Array
   */
  var mySkins = [
    'skin-blue',
    'skin-black',
    'skin-red',
    'skin-yellow',
    'skin-purple',
    'skin-green',
    'skin-blue-light',
    'skin-black-light',
    'skin-red-light',
    'skin-yellow-light',
    'skin-purple-light',
    'skin-green-light'
  ]

  /**
   * Get a prestored setting
   *
   * @param String name Name of of the setting
   * @returns String The value of the setting | null
   */
  function get(name) {
    if (typeof (Storage) !== 'undefined') {
      return localStorage.getItem(name)
    } else {
      window.alert('Please use a modern browser to properly view this template!')
    }
  }

  /**
   * Store a new settings in the browser
   *
   * @param String name Name of the setting
   * @param String val Value of the setting
   * @returns void
   */
  function store(name, val) {
    if (typeof (Storage) !== 'undefined') {
      localStorage.setItem(name, val)
    } else {
      window.alert('Please use a modern browser to properly view this template!')
    }
  }

  /**
   * Toggles layout classes
   *
   * @param String cls the layout class to toggle
   * @returns void
   */
  function changeLayout(cls) {
    $('body').toggleClass(cls)
    $layout.fixSidebar()
    if ($('body').hasClass('fixed') && cls == 'fixed') {
      $pushMenu.expandOnHover()
      $layout.activate()
    }
    $controlSidebar.fix()
  }

  /**
   * Replaces the old skin with the new skin
   * @param String cls the new skin class
   * @returns Boolean false to prevent link's default action
   */
  function changeSkin(cls) {
    $.each(mySkins, function (i) {
      $('body').removeClass(mySkins[i])
    })

    $('body').addClass(cls)
    store('skin', cls)
    return false
  }

  /**
   * Retrieve default settings and apply them to the template
   *
   * @returns void
   */
  function setup() {
    var tmp = get('skin')
    if (tmp && $.inArray(tmp, mySkins))
      changeSkin(tmp)

    // Add the change skin listener
    $('[data-skin]').on('click', function (e) {
      if ($(this).hasClass('knob'))
        return
      e.preventDefault()
      changeSkin($(this).data('skin'))
    })

    // Add the layout manager
    $('[data-layout]').on('click', function () {
      changeLayout($(this).data('layout'))
    })

    $('[data-controlsidebar]').on('click', function () {
      changeLayout($(this).data('controlsidebar'))
      var slide = !$controlSidebar.options.slide

      $controlSidebar.options.slide = slide
      if (!slide)
        $('.control-sidebar').removeClass('control-sidebar-open')
    })

    $('[data-sidebarskin="toggle"]').on('click', function () {
      var $sidebar = $('.control-sidebar')
      if ($sidebar.hasClass('control-sidebar-dark')) {
        $sidebar.removeClass('control-sidebar-dark')
        $sidebar.addClass('control-sidebar-light')
      } else {
        $sidebar.removeClass('control-sidebar-light')
        $sidebar.addClass('control-sidebar-dark')
      }
    })

    $('[data-enable="expandOnHover"]').on('click', function () {
      $(this).attr('disabled', true)
      $pushMenu.expandOnHover()
      if (!$('body').hasClass('sidebar-collapse'))
        $('[data-layout="sidebar-collapse"]').click()
    })

    //  Reset options
    if ($('body').hasClass('fixed')) {
      $('[data-layout="fixed"]').attr('checked', 'checked')
    }
    if ($('body').hasClass('layout-boxed')) {
      $('[data-layout="layout-boxed"]').attr('checked', 'checked')
    }
    if ($('body').hasClass('sidebar-collapse')) {
      $('[data-layout="sidebar-collapse"]').attr('checked', 'checked')
    }

  }

  // Create the new tab
  var $tabPane = $('<div />', {
    'id'   : 'control-sidebar-theme-demo-options-tab',
    'class': 'tab-pane active'
  })

  // Create the tab button
  var $tabButton = $('<li />', { 'class': 'nav-item' })
    .html('<a href=\'#control-sidebar-theme-demo-options-tab\' class=\'active\' data-toggle=\'tab\'>'
      + '<i class="fa fa-wrench"></i>'
      + '</a>')

  // Add the tab button to the right sidebar tabs
  $('[href="#control-sidebar-home-tab"]')
    .parent()
    .before($tabButton)

  // Create the menu
  var $demoSettings = $('<div />')

  // Layout options
  $demoSettings.append(
    '<h4 class="control-sidebar-heading">'
    + 'Layout Options'
    + '</h4>'
    
    // Sidebar Toggle
	+ '<div class="form-group">'    
    + '<input id="toggle_sidebar" type="checkbox"data-layout="sidebar-collapse" class="pull-right chk-col-grey"/> '
	+ '<label for="toggle_sidebar" class="control-sidebar-subheading">'
    + 'Toggle Sidebar'
    + '</label>'
    + '</div>'
    
    // Control Sidebar Toggle
	+ '<div class="form-group">'    
    + '<input id="toggle_right_sidebar" type="checkbox"data-controlsidebar="control-sidebar-open" class="pull-right chk-col-grey"/> '
	+ '<label for="toggle_right_sidebar" class="control-sidebar-subheading">'
    + 'Toggle Right Sidebar Slide'
    + '</label>'
    + '</div>'	
    // Control Sidebar Skin Toggle
	+ '<div class="form-group">'    
    + '<input id="toggle_right_sidebar_skin" type="checkbox"data-sidebarskin="toggle" class="pull-right chk-col-grey"/> '
	+ '<label for="toggle_right_sidebar_skin" class="control-sidebar-subheading">'
    + 'Toggle Right Sidebar Skin'
    + '</label>'
    + '</div>'
  )
  
  var $skinsList = $('<ul />', { 'class': 'list-unstyled clearfix' })

  // Dark sidebar skins
  var $skinBlue =
        $('<li />', { style: 'float:left; width: 33.33333%; padding: 5px;' })
          .append('<a href="javascript:void(0)" data-skin="skin-blue" style="display: block;" class="clearfix full-opacity-hover">'
            + '<div><span style="display:block; width: 100%; float: left; height: 20px; background: #242a33;"></span><span class="bg-blue" style="display:block; width: 100%; float: left; height: 40px;"></span></div>'
            + '</a>')
  $skinsList.append($skinBlue)
  var $skinBlack =
        $('<li />', { style: 'float:left; width: 33.33333%; padding: 5px;' })
          .append('<a href="javascript:void(0)" data-skin="skin-black" style="display: block;" class="clearfix full-opacity-hover">'
            + '<div class="clearfix"><span style="display:block; width: 100%; float: left; height: 20px; background: #242a33;"></span><span style="display:block; width: 100%; float: left; height: 40px; background: #f4f6f9;"></span></div>'
            + '</a>')
  $skinsList.append($skinBlack)
  var $skinPurple =
        $('<li />', { style: 'float:left; width: 33.33333%; padding: 5px;' })
          .append('<a href="javascript:void(0)" data-skin="skin-purple" style="display: block;" class="clearfix full-opacity-hover">'
            + '<div><span style="display:block; width: 100%; float: left; height: 20px; background: #242a33;"></span><span class="bg-purple" style="display:block; width: 100%; float: left; height: 40px;"></span></div>'
            + '</a>')
  $skinsList.append($skinPurple)
  var $skinGreen =
        $('<li />', { style: 'float:left; width: 33.33333%; padding: 5px;' })
          .append('<a href="javascript:void(0)" data-skin="skin-green" style="display: block;" class="clearfix full-opacity-hover">'
            + '<div><span style="display:block; width: 100%; float: left; height: 20px; background: #242a33;"></span><span class="bg-success" style="display:block; width: 100%; float: left; height: 40px;"></span></div>'
            + '</a>')
  $skinsList.append($skinGreen)
  var $skinRed =
        $('<li />', { style: 'float:left; width: 33.33333%; padding: 5px;' })
          .append('<a href="javascript:void(0)" data-skin="skin-red" style="display: block;" class="clearfix full-opacity-hover">'
            + '<div><span style="display:block; width: 100%; float: left; height: 20px; background: #242a33;"></span><span class="bg-red" style="display:block; width: 100%; float: left; height: 40px;"></span></div>'
            + '</a>')
  $skinsList.append($skinRed)
  var $skinYellow =
        $('<li />', { style: 'float:left; width: 33.33333%; padding: 5px;' })
          .append('<a href="javascript:void(0)" data-skin="skin-yellow" style="display: block;" class="clearfix full-opacity-hover">'
            + '<div><span style="display:block; width: 100%; float: left; height: 20px; background: #242a33;"></span><span class="bg-yellow" style="display:block; width: 100%; float: left; height: 40px;"></span></div>'
            + '</a>')
  $skinsList.append($skinYellow)

  // Light sidebar skins
  var $skinBlueLight =
        $('<li />', { style: 'float:left; width: 33.33333%; padding: 5px;' })
          .append('<a href="javascript:void(0)" data-skin="skin-blue-light" style="display: block;" class="clearfix full-opacity-hover">'
            + '<div><span style="display:block; width: 100%; float: left; height: 20px; background: #ffffff;"></span><span class="bg-blue" style="display:block; width: 100%; float: left; height: 40px;"></span></div>'
            + '</a>')
  $skinsList.append($skinBlueLight)
  var $skinBlackLight =
        $('<li />', { style: 'float:left; width: 33.33333%; padding: 5px;' })
          .append('<a href="javascript:void(0)" data-skin="skin-black-light" style="display: block;" class="clearfix full-opacity-hover">'
            + '<div class="clearfix"><span style="display:block; width: 100%; float: left; height: 20px; background: #ffffff;"></span><span style="display:block; width: 100%; float: left; height: 40px; background: #2A3E52;"></span></div>'
            + '</a>')
  $skinsList.append($skinBlackLight)
  var $skinPurpleLight =
        $('<li />', { style: 'float:left; width: 33.33333%; padding: 5px;' })
          .append('<a href="javascript:void(0)" data-skin="skin-purple-light" style="display: block;" class="clearfix full-opacity-hover">'
            + '<div><span style="display:block; width: 100%; float: left; height: 20px; background: #ffffff;"></span><span class="bg-purple" style="display:block; width: 100%; float: left; height: 40px;"></span></div>'
            + '</a>')
  $skinsList.append($skinPurpleLight)
  var $skinGreenLight =
        $('<li />', { style: 'float:left; width: 33.33333%; padding: 5px;' })
          .append('<a href="javascript:void(0)" data-skin="skin-green-light" style="display: block;" class="clearfix full-opacity-hover">'
            + '<div><span style="display:block; width: 100%; float: left; height: 20px; background: #ffffff;"></span><span class="bg-success" style="display:block; width: 100%; float: left; height: 40px;"></span></div>'
            + '</a>')
  $skinsList.append($skinGreenLight)
  var $skinRedLight =
        $('<li />', { style: 'float:left; width: 33.33333%; padding: 5px;' })
          .append('<a href="javascript:void(0)" data-skin="skin-red-light" style="display: block;" class="clearfix full-opacity-hover">'
            + '<div><span style="display:block; width: 100%; float: left; height: 20px; background: #ffffff;"></span><span class="bg-red" style="display:block; width: 100%; float: left; height: 40px;"></span></div>'
            + '</a>')
  $skinsList.append($skinRedLight)
  var $skinYellowLight =
        $('<li />', { style: 'float:left; width: 33.33333%; padding: 5px;' })
          .append('<a href="javascript:void(0)" data-skin="skin-yellow-light" style="display: block;" class="clearfix full-opacity-hover">'
            + '<div><span style="display:block; width: 100%; float: left; height: 20px; background: #ffffff;"></span><span class="bg-yellow" style="display:block; width: 100%; float: left; height: 40px;"></span></div>'
            + '</a>')
  $skinsList.append($skinYellowLight)

  

  $demoSettings.append('<h4 class="control-sidebar-heading">Skins</h4>')
  $demoSettings.append($skinsList)

  $tabPane.append($demoSettings)
  $('#control-sidebar-home-tab').after($tabPane)

  setup()

  $('[data-toggle="tooltip"]').tooltip()
});// End of use strict
