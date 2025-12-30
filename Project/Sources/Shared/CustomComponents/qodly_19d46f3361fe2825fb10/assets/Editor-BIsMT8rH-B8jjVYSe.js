import { q as qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__ } from './qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__-DVabGkeu.js';
import { LSPProvider, useLSP } from '@ws-ui/code-editor';
import { v as vir, i as iM, F as Fr, f as fN, O as OP, I as Il, P as Pl, b as Nl, R as Rn, c as b_, M as Ml, e as iir, q as qodly_19d46f3361fe2825fb10__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__, g as bir, h as M8t, j as Cie, k as Cir, Q as QI, l as d5, m as qr, W as WM, n as Ol, _ as _I, o as Mt, t as tN, p as oL, r as iL } from './index.es-CFmk1PMz.js';
import { q as qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__ } from './qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__-3DhkBDxl.js';
import './qodly_19d46f3361fe2825fb10__loadShare__react_mf_2_dom__loadShare__-BImKXKQ2.js';
import './qodly_19d46f3361fe2825fb10__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__-eHzHNLIa.js';
import './qodly_19d46f3361fe2825fb10__mf_v__runtimeInit__mf_v__-BHz-fcBO.js';
import './preload-helper-CqoC6PUU.js';
import './emotion-react.browser.esm-C4qPlxCP.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './tiny-invariant-w-EUxzzv.js';

const J = () => {
  const t = Fr(tN), s = iM();
  return /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: t.map((o, i) => /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    qodly_19d46f3361fe2825fb10__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__.Modal,
    {
      hasOverlay: i === 0,
      ...o,
      onClose: (r) => s(iL(r)),
      onEdit: (r) => s(oL(r))
    },
    o.id
  )) });
};
function K(t) {
  const s = iM(), o = Fr(qr(t.path)), i = Fr(WM);
  return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect(() => {
    o ? (t.replace && t.date && o && o.date !== t.date && s(Ol(o)), i !== t.path && s(_I(t.path))) : s(
      Mt({
        date: t.date,
        view: {
          panel: {
            isOpen: false,
            type: "",
            current: ""
          }
        },
        flags: { enabled: true },
        name: t.name,
        path: t.path,
        type: qodly_19d46f3361fe2825fb10__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__.FileFolderType.WEBFORM,
        initialContent: t.content,
        content: t.content
      })
    );
  }, []), o;
}
function Q({ webform: t, onChange: s, userComponents: o }) {
  const { inited: i, lastError: r, reload: u } = useLSP(), a = iM(), c = K(t), d = Fr(
    fN("studio.tips", "studio.tipsBaseUrl")
  ), S = d["studio.tips"], f = d["studio.tipsBaseUrl"];
  return qodly_19d46f3361fe2825fb10__loadShare__react__loadShare__.useEffect(() => {
    a(OP()), a(Il()), a(Pl()), a(Nl()), a(Rn()), a(b_()), a(Ml());
  }, []), /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex flex-1 bg-grey-900 h-screen", children: [
    /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(iir, { isInsideStudio: true, isStandaloneEditor: true, children: /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_19d46f3361fe2825fb10__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__.TipsProvider, { enabled: S, baseUrl: f, children: /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(bir, { children: /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(M8t, { children: /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(Cie, { children: [
      /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        Cir,
        {
          useDispatch: iM,
          useSelector: Fr,
          store: QI(),
          lspProps: {
            inited: i,
            lastError: r,
            reload: u
          },
          path: t.path,
          content: (c == null ? void 0 : c.content) || t.content,
          userComponents: o,
          onChange: s
        }
      ),
      /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(d5.Global, {})
    ] }) }) }) }) }),
    /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(J, {})
  ] });
}
const it = (t) => {
  const s = `ws${location.protocol === "https:" ? "s" : ""}://${location.host}/LSP`;
  return /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(vir, { children: /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    LSPProvider,
    {
      url: s,
      qodly: true,
      defaultZoom: 0,
      defaultInited: true,
      children: /* @__PURE__ */ qodly_19d46f3361fe2825fb10__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Q, { ...t })
    }
  ) });
};

export { it as default };
