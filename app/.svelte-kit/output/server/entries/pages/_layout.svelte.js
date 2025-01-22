import "clsx";
import { p as push, j as element, h as pop } from "../../chunks/index.js";
import { a as attr, c as clsx } from "../../chunks/wrap.svelte_svelte_type_style_lang.js";
import cn from "classnames";
import "../../chunks/client.js";
function Container($$payload, $$props) {
  push();
  let { children, customStyle, tag } = $$props;
  element(
    $$payload,
    tag,
    () => {
      $$payload.out += `${attr("class", clsx(cn("container", customStyle)) + " svelte-1sh7apx")}`;
    },
    () => {
      children($$payload);
      $$payload.out += `<!---->`;
    }
  );
  pop();
}
function Wrap($$payload, $$props) {
  push();
  let { children, customStyle, tag } = $$props;
  element(
    $$payload,
    tag,
    () => {
      $$payload.out += `${attr("class", clsx(cn("wrap", customStyle)) + " svelte-1dmwbsg")}`;
    },
    () => {
      children($$payload);
      $$payload.out += `<!---->`;
    }
  );
  pop();
}
function Footer($$payload) {
  Wrap($$payload, {
    tag: "footer",
    children: ($$payload2) => {
      Container($$payload2, {
        tag: "div",
        children: ($$payload3) => {
          $$payload3.out += `<p>Footer</p>`;
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
}
function Main($$payload, $$props) {
  push();
  let { children } = $$props;
  Wrap($$payload, {
    tag: "main",
    children: ($$payload2) => {
      Container($$payload2, {
        tag: "div",
        children: ($$payload3) => {
          children($$payload3);
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  pop();
}
function Navbar($$payload) {
  Wrap($$payload, {
    customStyle: "navbar",
    tag: "div",
    children: ($$payload2) => {
      Container($$payload2, {
        tag: "div",
        children: ($$payload3) => {
          $$payload3.out += `<p>Navbar</p>`;
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
}
function Gtm($$payload, $$props) {
  push();
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function _layout($$payload, $$props) {
  push();
  let { children } = $$props;
  if (process.env.NODE_ENV === "production") {
    $$payload.out += "<!--[-->";
    Gtm($$payload);
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  Navbar($$payload);
  $$payload.out += `<!----> `;
  Main($$payload, {
    children: ($$payload2) => {
      children($$payload2);
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
  pop();
}
export {
  _layout as default
};
