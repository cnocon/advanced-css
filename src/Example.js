import React from "react";

const Example = (props) => {
  const {title, lang, codeSnippet, compiledSnippet, children} = props
  const prettyPrintClass = `prettyprint lang-${lang}`;
  return(
    <section className="example">
      <div className="example__header">
        <h2>{title}</h2>
      </div>

      <div className="example__preview">
        <div className="example__preview--scss">
          <h4>SCSS Code</h4>
          <pre className={prettyPrintClass}>{codeSnippet}</pre>
        </div>

        <div className="example__preview--compiled">
          <h4>Compiled CSS</h4>
          <pre className={prettyPrintClass}>{compiledSnippet}</pre>
        </div>

        <div className="example__preview--rendered">
          <h4>Rendered</h4>
          {props.proTip ? <aside className="pro-tip"><p className="bg-yellow">{props.proTip}</p></aside> : null }
          <div>{children}</div>
        </div>
      </div>
    </section>
  );
}

export default Example;