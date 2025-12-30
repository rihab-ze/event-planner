import { _ as __vitePreload } from './preload-helper-CqoC6PUU.js';
import { q as qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__ } from './qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__-DVabGkeu.js';
import { q as qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__ } from './qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__-3DhkBDxl.js';
import { C as Ck, Q as QI, d as dir, z as zd, N as NP, q as qodly_19d46f3361fe2825fb10__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__, a as znr } from './index.es-CFmk1PMz.js';
import './qodly_19d46f3361fe2825fb10__mf_v__runtimeInit__mf_v__-BHz-fcBO.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './emotion-react.browser.esm-C4qPlxCP.js';
import './tiny-invariant-w-EUxzzv.js';
import './qodly_19d46f3361fe2825fb10__loadShare__react_mf_2_dom__loadShare__-BImKXKQ2.js';
import './qodly_19d46f3361fe2825fb10__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__-eHzHNLIa.js';
import '@ws-ui/code-editor';

const t = {}, r = (t == null ? void 0 : t.VITE_WEBFORM) || "standalone", u = {
  name: r,
  path: `WebForms/${r}.WebForm`,
  content: NP(qodly_19d46f3361fe2825fb10__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__.FileFolderType.WEBFORM, {}),
  date: (/* @__PURE__ */ new Date()).toISOString()
};
async function E() {
  try {
    await qodly_19d46f3361fe2825fb10__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__.loadI18n();
  } catch {
  }
  return __vitePreload(() => import('./Editor-BIsMT8rH-B8jjVYSe.js'),true              ?[]:void 0);
}
const I = qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.lazy(E), b = zd("i18n"), O = ({
  onChange: o,
  userComponents: n
}) => /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
  qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.Suspense,
  {
    fallback: /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_19d46f3361fe2825fb10__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__.AppLoader, { message: "Initializing...", version: znr }),
    children: /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Ck, { store: QI(), children: /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(dir, { isI18nEnabled: b, children: /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      I,
      {
        webform: u,
        userComponents: n,
        onChange: o
      }
    ) }) })
  }
);

export { O as default };
