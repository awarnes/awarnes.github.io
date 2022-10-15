# awarnes portfolio site

Trying to keep a relatively simple site for portfolio stuff.

## Using -- Phantom for Jekyll

A minimalist, responsive portfolio theme for [Jekyll](http://jekyllrb.com/) with Bootstrap.

[Original Source © Jami Gibbs](https://github.com/jamigibbs/phantom).

## Theme Features

### Navigation

Navigation can be customized in `_config.yml` under the `nav_item` key. Default settings:

```yaml
nav_item:
    - { url: '/', text: 'Home' }
    - { url: '/about', text: 'About' }
```

Set the `nav_enable` variable to false in `_config.yml` to disable navigation.

### Contact Form

You can display a contact form within the modal window template. This template is already setup to use the [Formspree](https://formspree.io) email system. You'll just want to add your email address to the form in `/_includes/contact-modal.html`.

Place the modal window template in any place you'd like the user to click for the contact form.
The template will display a link to click for the contact form modal window:

```liquid
{% include contact.html %}
{% include contact-modal.html %}
```

### Animation Effects

Animations with CSS classes are baked into the theme. To animate a section or element, simply add the animation classes:

```html
<div id="about-me" class="wow fadeIn">
  I'm the coolest!
</div>
```

For a complete list of animations, see the [animation list](http://daneden.github.io/animate.css/).

## Credit

* Bootstrap, http://getbootstrap.com/, (C) 2011 - 2016 Twitter, Inc., [MIT](https://github.com/twbs/bootstrap/blob/master/LICENSE)

* Wow, https://github.com/matthieua/WOW, (C) 2014 - 2016 Matthieu Aussaguel
, [GPL](https://github.com/matthieua/WOW#open-source-license)

* Animate.css, https://github.com/daneden/animate.css, (C) 2016 Daniel Eden, [MIT](https://github.com/daneden/animate.css/blob/master/LICENSE)
