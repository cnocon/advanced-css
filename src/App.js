import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import Example from './Example'
// import * as Styles from './Styles'
// import Alert from './Alert';

const App = () => {
  return (
    <main>
      {/* <header>
        <h1>Advanced <span>CSS/SCSS/SASS</span></h1>
      </header> */}
{/* <Alert /> */}

<Example
  title="Functions"
  lang="css"
  compiledSnippet={`.page-title {
  font-size: 3.75rem;
}`}
  codeSnippet={`/* This should be your base font size */
$rem-base: 16 !default;

@function strip-unit ($num) {
  @return $num / ($num * 0 + 1);
}

@function to-rem ($pixels) {
  @return strip-unit($pixels) / $rem-base * 1rem;
}

.page-title {
  font-size: to-rem(60px);
}`}>
  <h1 className="page-title">I'm a page title</h1>
</Example>

<Example
  title="Mixins"
  lang="css"
  compiledSnippet={`.text {
  font-family: Montserrat, sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 700;
}`}
  codeSnippet={`@mixin text($size, $lineHeight, $weight, $family) {
  font-family: $family;
  font-size: $size;
  line-height: $lineHeight;
  font-weight: $weight;
}

.text {
  @include text(1rem, 1.5, 700, $montserrat)
}`}>
  <p className="text">I'm a paragraph using the text mixin.</p>
</Example>

<Example
  title="If Statements"
  lang="css"
  compiledSnippet={`.text {
  font-size: 1rem;
  line-height: 2.5;
}`}
  codeSnippet={`@mixin text($size, $lineHeight, $weight, $family) {
  /* If the $size argument is not empty, then output the argument */
  @if $size != null {
    font-size: $size;
  }

  /* If the $lineHeight argument is not empty, then output the argument */
  @if $lineHeight != null {
    line-height: $lineHeight;
  }

  /* If the $weight argument is not empty, then output the argument */
  @if $weight != null {
    font-weight: $weight;
  }

  /* If the $family argument is not empty, then output the argument */
  @if $family != null {
    font-family: $family;
  }
}

.text {
  @include text(1rem, 2.5, null, null)
}`}>
  <p className="text">I'm a paragraph using the text mixin and passing null args.<br/>I break onto multiple lines.</p>
</Example>


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
}

p {
  color: #222;

  .dark-bg & {
    color: #fff;
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
  <div className="accordion">
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
compiledSnippet={`.button--success {
  background-color: rgba(57, 181, 74, 0.5);
}

.button--success:hover {
  background-color: rgba(87, 202, 103, 0.5);
  color: rgba(33, 103, 42, 0.5);
}

.button--danger {
  background-color: rgba(255, 0, 0, 0.75);
}

.button--danger:hover {
  background-color: rgba(255, 51, 51, 0.75);
  color: rgba(153, 0, 0, 0.75);
}

/*...Etc...*/`}
codeSnippet={`$buttonConfig: (
  'success': $color-success,
  'danger': $color-danger,
  'info': $light-blue
);

@each $state, $color in $buttonConfig {
  .button--#{$state} {
    background-color: $color;

    &:hover {
      background-color: lighten($color, 10%);
      color: darken($color, 20%);
    }
  }
}`}>
  <a className="button button--success">Save</a>
  <a className="button button--danger">Delete</a>
  <a className="button button--info">Help</a>
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
  padding: 10rem;
  background-image: url('https://bit.ly/2PQ6GBs');
}

.has-background-image {
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
  @extend %side-by-side-background;
  padding: 10rem;
  background-image: url('https://bit.ly/2PQ6GBs');
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
