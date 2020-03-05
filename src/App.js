import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Example from './Example'

const App = () => {
  return (
    <main>
      <header><h1>Advanced CSS</h1></header>
{/* 1. Prefixing parent selector references */}
<Example
  title="The Parent Selector"
  lang="css"
  proTip="The parent selector, &, is a special selector invented by Sass that’s used in nested selectors to refer to the outer selector. It makes it possible to re-use the outer selector in more complex ways, like adding a pseudo-class or adding a selector before the parent."
  compiledSnippet={`.dark-bg p {
  color: #fff;
}`}
  codeSnippet={`.dark-bg {
  background-color: #222;

  p {
    color: #222;

    .dark-bg & {
      color: #fff;
    }
  }
}`}>
  <p>I'm a paragraph.</p>
  <div className="dark-bg">
    <p>I'm a paragraph inside a dark background.</p>
  </div>
</Example>

<Example
  title="The Parent Selector: Adding Suffixes"
  lang="css"
  proTip="The parent selector, &, is a special selector invented by Sass that’s used in nested selectors to refer to the outer selector. It makes it possible to re-use the outer selector in more complex ways, like adding a pseudo-class or adding a selector before the parent."
  compiledSnippet={`.accordion {
  max-width: 600px;
  margin: 4rem auto;
  width: 90%;
  font-family: "Raleway", sans-serif;
  background: #f4f4f4;
}

.accordion__copy {
  display: none;
  padding: 1rem 1.5rem 2rem 1.5rem;
  color: gray;
  line-height: 1.6;
  font-size: 14px;
  font-weight: 500;
}

.accordion__copy--open {
  display: block;
}`}
  codeSnippet={`.accordion {
  max-width: 600px;
  margin: 4rem auto;
  width: 90%;
  font-family: "Raleway", sans-serif;
  background: #f4f4f4;

  &__copy {
    display: none;
    padding: 1rem 1.5rem 2rem 1.5rem;
    color: gray;
    line-height: 1.6;
    font-size: 14px;
    font-weight: 500;

    &--open {
      display: block;
    }
  }
}`}>
  <div class="accordion">
    <h5>NOT PICTURED: .accordion__copy (without --open modifier)</h5>
    <div className="accordion accordion__copy">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente commodi maxime nam voluptatem! Iste quia molestiae nemo doloribus dolorem ducimus, ipsa, ullam voluptatem beatae soluta minima quibusdam repudiandae magnam consequuntur.</p>
    </div>
    <div className="accordion accordion__copy--open">
      <p>.accordion__copy--open</p>
      <p><em>You can't see the .accordion__copy div</em></p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat accusamus adipisci sint ab animi! Fuga, cumque voluptatibus in vero atque iusto at modi distinctio fugit doloremque dignissimos! Iure, quo reprehenderit.</p>
    </div>
  </div>
</Example>

{/* 4. Maps */}
<Example
title="Map Data Types"
lang="css"
compiledSnippet={`.button--save {
  background-color: #d7263d;
}

.button--save:hover {
  background-color: #57ca67;
  color: #21672a;
}

.button--cancel {
  background-color: #D7263D;
}

.button--cancel:hover {
  background-color: #e05063;
  color: #801724;
}

/*...Etc...*/`}
codeSnippet={`$buttonConfig: (
  'save': $color-success,
  'cancel': $color-danger,
  'help': $light-blue
);

@each $pair in $buttonConfig {
  .button--#{nth($pair, 1)} {
    background-color: nth($pair, 2);

    &:hover {
      background-color: lighten(nth($pair, 2), 10%);
      color: darken(nth($pair, 2), 20%);
    }
  }
}`}>
  <a className="button button--save">Save</a>
  <a className="button button--cancel">Cancel</a>
  <a className="button button--help">Help</a>
</Example>

{/* 3. Regexp Selectors */}
<Example
title="Regular Expressions in Selectors"
lang="css"
compiledSnippet={`p[class^="message"] {
  border-left: 10px solid $black;
  padding-left: 1.5rem;
}

p[class$="error"] {
  border-color: $color-danger;
}

p[class$="success"] {
  border-color: $color-success;
}`}
codeSnippet={`p {
  &[class^="message"] {
    border-left: 10px solid $black;
    padding-left: 1.5rem;
  }

   &[class$="error"] {
    border-color: $color-danger;
  }

  &[class$="success"] {
    border-color: $color-success;
  }
}`}>
  <p className="message">I'm a generic message.</p>
  <p className="message--error">I'm an error message.</p>
  <p className="message--success">I'm a success message.</p>
</Example>


{/* 4. Maps */}
<Example
title="Mixins"
lang="css"
compiledSnippet={`.center-horizontal {
  position: absolute;
  left: 50%;
  transform: translateX(-50%)
}

.center-vertical {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.center-both {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}`}
codeSnippet={`@mixin absoluteCenter($position) {
  position: absolute;

  @if $position == 'vertical' {
    top: 50%;
    transform: translateY(-50%);
  }
  @else if $position == 'horizontal' {
    left: 50%;
    transform: translateX(-50%);
  }
  @else if $position == 'both' {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

// Using the mixin
.parent {
  position: relative;
  height: 450px;
}

.center-both {
  @include absoluteCenter(both);
}

.center-horizontal {
  @include absoluteCenter(horizontal);
}

.center-vertical {
  @include absoluteCenter(vertical);
}`}>
  <div className="parent">
    <div className="center-both bg-yellow">
      <p>.center-both</p>
    </div>

    <div className="center-horizontal bg-aqua">
      <p>.center-horizontal</p>
    </div>

    <div className="center-vertical bg-light-blue">
      <p>.center-vertical</p>
    </div>
  </div>
</Example>


<Example
  title="@extend with placeholders"
  lang="css"
  compiledSnippet={`.has-background-image {
  background-image: url('https://bit.ly/2PQ6GBs');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}`}
  codeSnippet={`%side-by-side-background {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.has-background-image {
  background-image: url('https://bit.ly/2PQ6GBs');
  @extend %side-by-side-background;
}`}>

  <div className="has-background-image">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus modi doloremque expedita error pariatur voluptatum soluta voluptatibus ipsum optio. Recusandae, tenetur incidunt. Eum facere perferendis voluptatem omnis amet sapiente facilis.</p>
  </div>
</Example>

<Example
  title="Functions"
  lang="css"
  proTip="A @mixin is very similar to a function. The main difference between the two is that mixins output lines of Sass code that will compile directly into CSS styles, while functions return a value that can then become the value for a CSS property or become something that might be passed to another function or mixin"
  compiledSnippet={`h3 {
  font-size: 7.5rem;
}`}
  codeSnippet={`@function calculate-rem($size) {
  $rem-size: $size / 16px;
  @return #{$rem-size}rem;
}

@mixin font-size($size) {
  font-size: calculate-rem($size);
}

h3 {
  @include font-size(120px);
}`}>
  <h3>120px / 16px = 7.5rem</h3>
</Example>
    </main>
  );
}

export default App;