import "./index.css";
import ReactIconsSampler from "./ReactIconsSampler";

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <p><a href="/labs/lab2/tailwind">Open Tailwind CSS lab</a></p>

      <section>
        <h3>Styling with the STYLE attribute</h3>
        <p style={{ backgroundColor: "blue", color: "white", padding: "0.5rem" }}>
          Style attributes are convenient for experiments, but separate CSS rules are easier to maintain.
        </p>
        <p style={{ backgroundColor: "green", color: "yellow", padding: "0.5rem" }}>
          My green background and yellow text sample.
        </p>
        <p id="wd-ai-style-attr" style={{ backgroundColor: "purple", color: "white", padding: "0.5rem" }}>
          Purple background with white text.
        </p>
      </section>

      <section id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">A red background and white text from an id selector.</p>
        <p id="wd-id-selector-2">A yellow background and dark text from a second id selector.</p>
        <p id="wd-id-selector-3">A personal blue id selector sample.</p>
        <p id="wd-ai-id-selector">An additional purple id selector sample.</p>
      </section>

      <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>
        <p className="wd-class-selector">One class can style different element types.</p>
        <h4 className="wd-class-selector">This heading shares the paragraph style.</h4>
        <p className="wd-your-class">My own class, reused below.</p>
        <h4 className="wd-your-class">Another element using my class.</h4>
        <p className="wd-ai-class-selector">A second sample class.</p>
        <h4 className="wd-ai-class-selector">The same class can style a heading too.</h4>
      </div>

      <section id="wd-css-document-structure">
        <h3>Document structure selectors</h3>
        <div className="wd-selector-1">
          <div className="wd-selector-2">
            <p className="wd-selector-3">A descendant selector applies here. <span className="wd-selector-4">This direct child has its own style.</span></p>
            <span className="wd-ai-selector-5">A deeper descendant selector sample.</span>
          </div>
        </div>
      </section>

      <section>
        <h3>CSS cascade and specificity</h3>
        <p id="wd-ai-cascade" className="wd-ai-cascade">The id selector wins over the class and tag rules.</p>
      </section>

      <section id="wd-css-colors">
        <h2>Colors</h2>
        <h3 className="wd-fg-color-blue">Foreground color</h3>
        <p className="wd-fg-color-red">This paragraph is red and <span className="wd-fg-color-green">this phrase is green.</span></p>
        <p className="wd-fg-color-blue" id="wd-ai-fg">Blue text with <span className="wd-fg-color-black">a black phrase.</span></p>
      </section>

      <div id="wd-css-background-colors">
        <h2 className="wd-bg-color-blue wd-fg-color-white">Background color</h2>
        <p className="wd-bg-color-red wd-fg-color-black">This paragraph has a red background and <span className="wd-bg-color-green wd-fg-color-white">this span has a green background and white text.</span></p>
        <p id="wd-ai-bg" className="wd-bg-color-yellow wd-fg-color-black">Yellow background with readable dark text.</p>
      </div>

      <section id="wd-css-borders">
        <h2>Borders</h2>
        <p className="wd-border-fat wd-border-red wd-border-solid wd-sample-box">Solid, fat, red border</p>
        <p className="wd-border-thin wd-border-blue wd-border-dashed wd-sample-box">Dashed, thin, blue border</p>
        <p id="wd-ai-border" className="wd-border-fat wd-border-yellow wd-border-dashed wd-sample-box">Fat, dashed, yellow border</p>
      </section>

      <section>
        <h2>Padding and margins</h2>
        <div className="wd-bg-color-yellow wd-border-fat wd-border-red wd-border-solid wd-padded-top-left">Padding top and left</div>
        <div className="wd-bg-color-yellow wd-border-fat wd-border-blue wd-border-solid wd-padded-bottom-right">Padding bottom and right</div>
        <div className="wd-bg-color-blue wd-fg-color-white wd-border-fat wd-border-yellow wd-border-solid wd-padding-fat">Padding on every side</div>
        <div className="wd-bg-color-yellow wd-border-fat wd-border-red wd-border-solid wd-margin-bottom">Margin below</div>
        <div className="wd-bg-color-yellow wd-border-fat wd-border-blue wd-border-solid wd-margin-right-left">Margin left and right</div>
        <div className="wd-bg-color-blue wd-fg-color-white wd-border-fat wd-border-yellow wd-border-solid wd-margin-all-around">Margin on every side</div>
        <div className="wd-bg-color-yellow wd-border-fat wd-border-red wd-border-solid" style={{ paddingTop: 32 }}>Extra top padding</div>
      </section>

      <section id="wd-css-box-model">
        <h2>Box model</h2>
        <div className="wd-box-model-parent">
          Parent background (shows through the margin)
          <div className="wd-box-model-box"><div className="wd-box-model-content">Content inside padding and border</div></div>
        </div>
        <h3>box-sizing</h3>
        <div className="wd-box-sizing-demo">
          <div className="wd-box-sizing-content">content-box: declared width excludes padding and border</div>
          <div className="wd-box-sizing-border">border-box: declared width includes padding and border</div>
        </div>
      </section>

      <section id="wd-css-corners">
        <h2>Rounded corners</h2>
        <p className="wd-border-thin wd-border-blue wd-border-solid wd-padding-fat wd-rounded-corners-top">Rounded top corners</p>
        <p className="wd-border-thin wd-border-blue wd-border-solid wd-padding-fat wd-rounded-corners-bottom">Rounded bottom corners</p>
        <p className="wd-border-thin wd-border-blue wd-border-solid wd-padding-fat wd-rounded-corners-all-around">Rounded all around</p>
        <p className="wd-border-thin wd-border-blue wd-border-solid wd-padding-fat wd-rounded-corners-inline">Different corner radii</p>
      </section>

      <section id="wd-css-dimensions">
        <h2>Dimensions and display</h2>
        <div className="wd-sample-row">
          <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
          <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">Landscape</div>
          <div className="wd-dimension-square wd-bg-color-red">Square</div>
          <div style={{ width: 120, height: 60 }} className="wd-bg-color-green wd-fg-color-white">Extra dimension sample</div>
        </div>
        <h3>Inline</h3>
        <div><span className="wd-display-inline wd-bg-color-red">Inline 1</span> <span className="wd-display-inline wd-bg-color-yellow">Inline 2</span> <span className="wd-display-inline wd-bg-color-blue wd-fg-color-white">Inline 3</span></div>
        <h3>Inline-block</h3>
        <div><span className="wd-display-inline-block wd-bg-color-red">Inline-block 1</span> <span className="wd-display-inline-block wd-bg-color-yellow">Inline-block 2</span> <span className="wd-display-inline-block wd-bg-color-blue wd-fg-color-white">Inline-block 3</span></div>
        <h3>Block</h3>
        <div><span className="wd-display-block wd-bg-color-red">Block 1</span><span className="wd-display-block wd-bg-color-yellow">Block 2</span><span className="wd-display-block wd-bg-color-blue wd-fg-color-white">Block 3</span></div>
      </section>

      <div id="wd-css-positions">
        <h2>Positions and z-index</h2>
        <div className="wd-sample-row">
          <div className="wd-dimension-portrait wd-bg-color-yellow"><div className="wd-pos-relative-nudge-down-right">Relative</div></div>
          <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white wd-pos-relative-nudge-up-right">Nudged</div>
          <div className="wd-dimension-square wd-bg-color-red">Normal flow</div>
        </div>
        <div id="wd-css-position-absolute">
          <h2>Absolute position</h2>
          <div className="wd-pos-relative" style={{ height: 150 }}>
            <div className="wd-pos-absolute-10-10 wd-bg-color-yellow wd-dimension-portrait">Portrait</div>
            <div className="wd-pos-absolute-50-50 wd-bg-color-blue wd-fg-color-white wd-dimension-landscape">Landscape</div>
            <div className="wd-pos-absolute-120-20 wd-bg-color-red wd-dimension-square">Square</div>
          </div>
          <br /><br /><br /><br /><br /><br />
        </div>
        <div id="wd-z-index">
          <h2>Z index</h2>
          <div className="wd-pos-relative" style={{ height: 150 }}>
            <div className="wd-pos-absolute-10-10 wd-bg-color-yellow wd-dimension-portrait">Portrait</div>
            <div className="wd-zindex-bring-to-front wd-pos-absolute-50-50 wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">Landscape</div>
            <div className="wd-pos-absolute-120-20 wd-dimension-square wd-bg-color-red">Square</div>
          </div>
          <br /><br /><br /><br /><br /><br />
        </div>
        <h3>Fixed position</h3>
        <p>A small fixed badge stays pinned to the viewport.</p>
        <div className="wd-pos-fixed wd-dimension-square wd-bg-color-blue wd-fg-color-white">Fixed</div>
      </div>

      <section id="wd-float-divs">
        <h2>Float and grid layout</h2>
        <div className="wd-sample-box">
          <div className="wd-float-right wd-dimension-square wd-bg-color-blue" />
          Text wraps around this floated box, then continues across the available space. Float removes the element from normal flow, and a clearing element starts the next section below it. This paragraph intentionally has enough copy to demonstrate the wrap behavior.
          <div className="wd-float-done" />
          <div id="wd-ai-float" className="wd-float-left wd-dimension-square wd-bg-color-red" />
          Another short passage wraps beside the left float and ends at the clearer below.
          <div className="wd-float-done" />
        </div>
        <div id="wd-css-grid-layout">
          <h3>Float-based grid</h3>
          <div className="wd-grid-row"><div className="wd-grid-col-half-page wd-bg-color-yellow">Left half</div><div className="wd-grid-col-half-page wd-bg-color-blue wd-fg-color-white">Right half</div></div>
          <div className="wd-grid-row"><div className="wd-grid-col-left-sidebar wd-bg-color-yellow">Sidebar</div><div className="wd-grid-col-main-content wd-bg-color-blue wd-fg-color-white">Main content</div><div className="wd-grid-col-right-sidebar wd-bg-color-green wd-fg-color-white">Sidebar</div></div>
          <div id="wd-ai-grid" className="wd-grid-row"><div className="wd-grid-col-third-page wd-bg-color-red">One third</div><div className="wd-grid-col-two-thirds-page wd-bg-color-green wd-fg-color-white">Two thirds</div></div>
        </div>
      </section>

      <section id="wd-css-flex">
        <h2>Flex</h2>
        <div className="wd-flex-row-container"><div className="wd-bg-color-yellow">Column 1</div><div className="wd-bg-color-blue wd-fg-color-white">Column 2</div><div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">Column 3</div></div>
        <div id="wd-ai-flex" className="wd-flex-row-container"><div className="wd-bg-color-yellow wd-width-110px">Fixed width</div><div className="wd-bg-color-blue wd-fg-color-white">Natural width</div><div className="wd-bg-color-green wd-fg-color-white wd-flex-grow-1">Growing column</div></div>
      </section>

      <section className="wd-media-queries-demo">
        <h2>Media Query Demo</h2>
        <p>Resize the browser to see the background and active width range change.</p>
        <ul>
          <li className="wd-mq-rule-default">Default: white text on green</li>
          <li className="wd-mq-rule-750">750px to 1000px: black text on yellow</li>
          <li className="wd-mq-rule-1000">1000px to 1250px: white text on blue</li>
          <li className="wd-mq-rule-1250">Above 1250px: white text on red</li>
        </ul>
      </section>

      <ReactIconsSampler />
    </div>
  );
}
