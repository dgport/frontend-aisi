(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_2792fcf0._.js", {

"[project]/src/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow ",
            destructive: "bg-white border-[red] border text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 46,
        columnNumber: 7
    }, this);
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/i18n/routing.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Link": (()=>Link),
    "locales": (()=>locales),
    "redirect": (()=>redirect),
    "routing": (()=>routing),
    "usePathname": (()=>usePathname),
    "useRouter": (()=>useRouter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/routing/defineRouting.js [app-client] (ecmascript) <export default as defineRouting>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$react$2d$client$2f$createNavigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createNavigation$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/navigation/react-client/createNavigation.js [app-client] (ecmascript) <export default as createNavigation>");
;
;
const locales = [
    "en",
    "ka",
    "ru"
];
const routing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__["defineRouting"])({
    locales: [
        "ka",
        "en",
        "ru"
    ],
    defaultLocale: "ka",
    localePrefix: "always"
});
const { Link, redirect, usePathname, useRouter } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$react$2d$client$2f$createNavigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createNavigation$3e$__["createNavigation"])(routing);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/popover.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Popover": (()=>Popover),
    "PopoverAnchor": (()=>PopoverAnchor),
    "PopoverContent": (()=>PopoverContent),
    "PopoverTrigger": (()=>PopoverTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-popover/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const Popover = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const PopoverTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const PopoverAnchor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Anchor"];
const PopoverContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, align = "center", sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            ref: ref,
            align: align,
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-popover-content-transform-origin]", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/popover.tsx",
            lineNumber: 19,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/popover.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, this));
_c1 = PopoverContent;
PopoverContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "PopoverContent$React.forwardRef");
__turbopack_context__.k.register(_c1, "PopoverContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/svg/Georgian.svg.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _path, _path2, _path3, _path4, _path5, _path6, _path7, _path8, _path9;
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
;
var SvgGeorgian = function SvgGeorgian(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        xmlns: "http://www.w3.org/2000/svg",
        width: 800,
        height: 800,
        "aria-hidden": "true",
        className: "Georgian_svg__iconify Georgian_svg__iconify--twemoji",
        viewBox: "0 0 36 36"
    }, props), _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fill: "#EEE",
        d: "M32 5H20.5v10.5H36V9a4 4 0 0 0-4-4"
    })), _path2 || (_path2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fill: "#E8112D",
        d: "M20.5 5h-5v10.5H0v5h15.5V31h5V20.5H36v-5H20.5z"
    })), _path3 || (_path3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fill: "#E8112D",
        d: "M28.915 9.585a14 14 0 0 1 .221-1.86 7.2 7.2 0 0 1-1.77 0q.175.924.221 1.86a14 14 0 0 1-1.86-.221 7.2 7.2 0 0 1 0 1.77 13.6 13.6 0 0 1 1.86-.221 14 14 0 0 1-.221 1.86 7.2 7.2 0 0 1 1.77 0 13.6 13.6 0 0 1-.221-1.86 14 14 0 0 1 1.86.221 7.2 7.2 0 0 1 0-1.77q-.925.177-1.86.221"
    })), _path4 || (_path4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fill: "#EEE",
        d: "M15.5 5H4a4 4 0 0 0-4 4v6.5h15.5z"
    })), _path5 || (_path5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fill: "#E8112D",
        d: "M8.415 9.585a14 14 0 0 1 .221-1.86 7.2 7.2 0 0 1-1.77 0q.175.924.221 1.86a14 14 0 0 1-1.86-.221 7.2 7.2 0 0 1 0 1.77 13.6 13.6 0 0 1 1.86-.221 14 14 0 0 1-.221 1.86 7.2 7.2 0 0 1 1.77 0 13.6 13.6 0 0 1-.221-1.86 14 14 0 0 1 1.86.221 7.2 7.2 0 0 1 0-1.77q-.925.177-1.86.221"
    })), _path6 || (_path6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fill: "#EEE",
        d: "M36 27v-6.5H20.5V31H32a4 4 0 0 0 4-4"
    })), _path7 || (_path7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fill: "#E8112D",
        d: "M28.915 26.415q.046.935.221 1.86a7.2 7.2 0 0 0-1.77 0q.175-.924.221-1.86a14 14 0 0 0-1.86.221 7.2 7.2 0 0 0 0-1.77q.924.175 1.86.221a14 14 0 0 0-.221-1.86 7.2 7.2 0 0 0 1.77 0 13.6 13.6 0 0 0-.221 1.86 14 14 0 0 0 1.86-.221 7.2 7.2 0 0 0 0 1.77 13 13 0 0 0-1.86-.221"
    })), _path8 || (_path8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fill: "#EEE",
        d: "M15.5 20.5H0V27a4 4 0 0 0 4 4h11.5z"
    })), _path9 || (_path9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fill: "#E8112D",
        d: "M8.415 26.415q.046.935.221 1.86a7.2 7.2 0 0 0-1.77 0q.175-.924.221-1.86a14 14 0 0 0-1.86.221 7.2 7.2 0 0 0 0-1.77q.924.175 1.86.221a14 14 0 0 0-.221-1.86 7.2 7.2 0 0 0 1.77 0 13.6 13.6 0 0 0-.221 1.86 14 14 0 0 0 1.86-.221 7.2 7.2 0 0 0 0 1.77 13 13 0 0 0-1.86-.221"
    })));
};
_c = SvgGeorgian;
const __TURBOPACK__default__export__ = SvgGeorgian;
var _c;
__turbopack_context__.k.register(_c, "SvgGeorgian");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/svg/Russian.svg.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _path, _path2, _path3;
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
;
var SvgRussian = function SvgRussian(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        xmlns: "http://www.w3.org/2000/svg",
        width: 800,
        height: 800,
        "aria-hidden": "true",
        className: "Russian_svg__iconify Russian_svg__iconify--twemoji",
        viewBox: "0 0 36 36"
    }, props), _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fill: "#CE2028",
        d: "M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4v-4h36z"
    })), _path2 || (_path2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fill: "#22408C",
        d: "M0 13h36v10H0z"
    })), _path3 || (_path3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fill: "#EEE",
        d: "M32 5H4a4 4 0 0 0-4 4v4h36V9a4 4 0 0 0-4-4"
    })));
};
_c = SvgRussian;
const __TURBOPACK__default__export__ = SvgRussian;
var _c;
__turbopack_context__.k.register(_c, "SvgRussian");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/svg/Arabian.svg.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _path, _g;
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
;
var SvgArabian = function SvgArabian(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        xmlns: "http://www.w3.org/2000/svg",
        width: 800,
        height: 800,
        "aria-hidden": "true",
        className: "Arabian_svg__iconify Arabian_svg__iconify--twemoji",
        viewBox: "0 0 36 36"
    }, props), _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fill: "#006C35",
        d: "M32 5H4a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4"
    })), _g || (_g = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("g", {
        fill: "#FFF"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M8.919 14.05c.632.06.283-1.069.512-1.274.043-.101.123-.102.129.026v.958c-.006.312.199.403.358.468.166-.013.276-.007.341.154l.078 1.658s.384.11.402-.933c.019-.612-.122-1.124-.039-1.243.003-.117.152-.124.256-.067.165.116.239.26.495.203.391-.107.625-.297.631-.597-.023-.285-.055-.57-.178-.855.017-.052-.075-.186-.058-.238.07.11.177.101.201 0-.066-.219-.169-.429-.337-.52-.138-.122-.34-.097-.414.157-.034.292.106.64.318.923.045.111.109.295.081.461-.113.064-.227.038-.321-.062 0 0-.311-.233-.311-.285.083-.528.019-.588-.027-.734-.032-.202-.128-.267-.206-.405-.078-.082-.183-.082-.233 0-.138.238-.074.75.026.979.071.21.181.343.129.343-.043.119-.131.091-.195-.046-.092-.284-.11-.707-.11-.898-.028-.236-.058-.741-.213-.869-.095-.129-.236-.067-.285.052-.01.234-.012.469.015.686.106.379.14.713.192 1.102.014.521-.301.226-.287-.032.073-.335.054-.863-.011-.997-.051-.133-.112-.167-.236-.145-.098-.008-.352.27-.424.73 0 0-.061.237-.087.448-.035.238-.191.406-.301-.033-.095-.319-.153-1.106-.312-.922-.046.615-.101 1.697.421 1.807"
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M9.87 14.499c-.52.01-1.281.683-1.302 1.056.548-.264 1.087-.518 1.645-.79-.09-.135-.005-.256-.343-.266"
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M12.737 16.516c.241-.803-.039-1.395.092-1.392.277.299.665.04.75-.064.037-.052.128-.086.192-.018.217.156.599.082.678-.192a6 6 0 0 0 .092-.833c-.177.055-.309.092-.321.165l-.037.238c-.015.077-.168.08-.174-.018-.067-.305-.345-.345-.513.128-.113.092-.317.11-.339-.027.027-.317-.101-.36-.357-.211-.082-.629-.165-1.23-.247-1.859.107-.003.205.076.302-.046-.107-.333-.333-1.013-.458-1.062-.061-.074-.113-.028-.192-.009-.134.043-.259.159-.22.384.159.965.263 1.7.421 2.665.024.113-.07.262-.192.247-.207-.14-.259-.424-.613-.412-.257.003-.55.281-.586.55-.043.213-.058.445 0 .632.18.216.397.195.586.146.155-.064.284-.22.338-.183.037.045.009.558-.732.952-.449.201-.806.247-.998-.119-.119-.229.009-1.099-.284-.897-.867 2.235 2.03 2.545 2.354.092.031-.101.153-.202.174-.037-.067 2.222-2.241 2.375-2.61 1.676-.092-.165-.119-.531-.128-.751-.055-.437-.284-.269-.32.164-.037.241-.027.309-.027.54.115 1.755 2.915 1.001 3.369-.449m-1.08-1.518c-.018.034-.097.02-.155.02-.066-.003-.097-.014-.137-.067-.018-.06.038-.117.063-.162.031-.053.198-.108.257.04a.17.17 0 0 1-.028.169"
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M13.602 13.009c.174-.064.999-1.007.999-1.007-.043-.037-.081-.064-.124-.101-.046-.04-.041-.08 0-.119.204-.119.139-.38.032-.499a.5.5 0 0 0-.444.004c-.143.137-.177.357-.064.495.11.052.22.163.147.224-.337.36-1.261.981-1.154 1.003.023.03.59.029.608 0m.611-1.481c.053-.013.121.034.153.104s.015.137-.037.15h-.002c-.052.013-.12-.034-.152-.104-.031-.071-.014-.137.038-.15m-5.351 5.73c-.136.277-.193.087-.205-.068a3.6 3.6 0 0 1 .039-.779c.034-.22 0-.153-.07-.064-.309.492-.336 1.228-.165 1.447.09.104.239.15.35.116.194-.084.279-.478.233-.621-.066-.101-.117-.117-.182-.031m10.181-5.208c.356.478.694.965 1.025 1.461q.098.643.14 1.267c.055.804.071 1.674.021 2.521.15.006.393-.244.477-.609.055-.505-.02-1.404-.025-1.702a22 22 0 0 0-.027-.56c.394.644.778 1.318 1.153 2.067.137-.064.107-.83.027-.938-.3-.643-.713-1.279-.845-1.523-.049-.09-.216-.346-.415-.639a8 8 0 0 0-.084-.698c-.062-.428.177.047.144-.202-.077-.428-.315-.717-.593-1.109-.09-.127-.087-.153-.226.031a.8.8 0 0 0-.066.351 3 3 0 0 0-.139-.185l-.455-.388c-.101-.072-.347-.202-.391.014a1.3 1.3 0 0 0 .022.454c.026.107.181.285.257.387m.74-.024c.019.083.039.166.052.251l.015.081a4 4 0 0 0-.131-.172c-.164-.194-.028-.152.064-.16"
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M21.919 16.693c-.348.363-.85.81-1.396 1.017-.059.066.146.349.41.349.443-.052.833-.301 1.194-.956.097-.152.267-.479.271-.733.033-1.486-.074-2.643-.297-3.717a.6.6 0 0 1 .012-.259c.028-.034.126 0 .178-.084.075-.078-.201-.718-.359-.964-.056-.11-.075-.184-.168.013-.098.16-.163.439-.155.699.211 1.463.276 2.744.414 4.207.011.141-.01.347-.104.428m5.83-3.71c-.015-.104-.061-.346-.043-.377.028-.074.173.008.225-.077.076-.077-.374-.655-.531-.901-.057-.11-.076-.184-.169.013-.098.16-.132.447-.093.699.235 1.589.41 2.783.446 4.192-.021.134-.025.206-.088.374-.139.178-.292.4-.437.508-.144.107-.451.21-.552.289-.317.185-.318.396-.06.403.442-.052.966-.088 1.327-.634.097-.152.212-.565.217-.819.033-1.486-.019-2.596-.242-3.67m-3.351 1.237c.004-.204.023-.474.034-.643.005-.063.02-.134.08-.15.061-.016.169.062.17-.004-.012-.129-.038-.321-.111-.412-.1-.148-.365-.112-.412.12.001.086.04.132.033.21-.012.044-.058.074-.167.022.018-.016-.071-.139-.071-.139-.085-.052-.199.003-.272.05a.42.42 0 0 0-.024.33c.12.227.539.612.74.616"
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M24.257 12.481q.44.538.893 1.093c.065.826.082 1.502.146 2.328-.009.35-.117.655-.22.699 0 0-.155.09-.259-.009-.076-.031-.379-.505-.379-.505-.155-.142-.257-.102-.367 0-.304.293-.441.843-.647 1.221-.054.085-.204.157-.371-.006-.423-.579-.175-1.402-.227-1.19-.377.425-.211 1.128-.126 1.28.124.248.225.408.467.531.22.162.392.06.486-.053.222-.231.225-.816.329-.934.072-.213.257-.177.346-.082a.9.9 0 0 0 .315.273c.207.183.454.216.697.049.166-.093.275-.214.372-.453.108-.288.049-1.612.027-2.406.155.2.306.409.459.618.067.663.105 1.323.083 1.997-.016.135.47-.4.466-.654q-.001-.305 0-.566c.234.352.462.715.676 1.099.134-.07.09-.825.005-.929-.247-.414-.576-.845-.803-1.153-.015-.039-.023-.083-.041-.12-.091-.211-.034-.381-.077-.605-.042-.225-.031-.561-.096-.828-.018-.104-.072-.438-.056-.469.026-.075.126.002.175-.084.073-.08-.253-.925-.419-1.167-.06-.108-.168-.071-.302.105-.123.116-.077.38-.03.631.117.608.215 1.191.299 1.768a58 58 0 0 0-.545-.713l-.008-.044c0-.011-.027-.524-.051-.646-.004-.049-.016-.064.036-.058.055.046.062.049.097.065.056.01.105-.085.072-.172l-.517-.952c-.041-.041-.095-.085-.16.011a.37.37 0 0 0-.128.283c.016.225.055.455.07.681l.022.122c-.023-.027-.051-.061-.063-.073-.439-.462.202-.075-.084-.432-.242-.266-.312-.349-.52-.509-.104-.067-.167-.195-.201.023a5 5 0 0 0-.015.575c0 .092.093.26.174.36m-8.901 1.079c.252.104.413-.376.517-.902.07-.148.124-.164.16-.088-.009.7.05.855.23 1.068.401.31.733.039.76.013l.312-.312c.069-.073.162-.078.26-.013.096.086.083.236.287.34.172.069.54.016.625-.132.115-.196.143-.264.195-.338.082-.109.222-.06.222-.026-.013.061-.095.122-.039.231.098.073.12.026.178.01.204-.098.356-.54.356-.54.009-.165-.083-.151-.143-.117-.078.047-.083.063-.161.111-.1.015-.293.081-.388-.067-.098-.178-.1-.426-.174-.605 0-.013-.13-.283-.009-.3.061.011.19.045.211-.063.063-.106-.137-.408-.273-.561-.119-.13-.284-.146-.443-.013-.112.103-.096.217-.118.326a.5.5 0 0 0 .105.443c.111.219.314.502.247.898 0 0-.118.188-.325.164-.086-.019-.226-.056-.3-.606-.056-.417.014-1-.163-1.273-.064-.165-.11-.324-.266-.042-.042.111-.222.279-.091.626.107.219.15.576.102.974-.074.113-.09.151-.187.264-.136.146-.283.109-.396.054-.106-.071-.188-.108-.236-.334.009-.36.029-.95-.037-1.075-.097-.194-.257-.124-.326-.065-.329.301-.491.808-.59 1.211-.091.294-.188.21-.256.091-.166-.156-.177-1.373-.378-1.172-.323.914.182 1.918.532 1.82"
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "m20.137 15.524-.096-.055-1.881-.009c-.097-.037-.068-.069 0-.095.449-.061 1.248-.191 1.301-.958-.009-.399-.172-.661-.662-.733-.359.028-.616.377-.575.76-.017.104.034.306-.071.329-.691.063-1.444.495-1.469.805-.042.029-.136-.055-.124-.187a3.7 3.7 0 0 0-.475-1.606c-.218-.218-.15-.146-.296-.043-.094.108-.111.182-.106.397 0 .008.176.499.325.843.099.353.192.756.125 1.137-.232.504-.699.956-1.149 1.201-.232.075-.431.048-.48-.004-.143-.096-.136-.273-.125-.276.379-.265.813-.478 1.153-1.191.1-.272.13-.437.031-.858a.8.8 0 0 0-.197-.398c.061-.04.236.093.263.014a1.25 1.25 0 0 0-.331-.61c-.135-.123-.282-.137-.406-.024-.14.078-.17.356-.103.6.074.184.275.215.419.584 0 .008.052.276-.022.381-.059.184-.824.785-.866.812-.021.026-.012-.013-.015-.113-.005-.122.049-.41.034-.412-.249.161-.332.654-.377.8-.63.435-1.343.759-1.755 1.201-.215.335 1.478-.385 1.675-.472.044.032.039.183.157.318.176.238.548.385.913.294.61-.221.963-.637 1.321-1.098.051-.075.131-.132.205-.075.246.551.957.941 1.874.982.213-.259.11-.384.024-.438 0-.008-.453-.18-.522-.352-.042-.156.06-.293.264-.397.589-.071 1.168-.15 1.729-.33.006-.188.115-.47.19-.592.072-.124.111-.087.1-.132m-1.547-1.172c.028-.047.121-.045.208.006s.136.13.107.177c-.028.048-.122.045-.209-.006s-.134-.129-.106-.177m-.757 1.9c-.202.069-.396.123-.396.415.075.406-.103.267-.208.211-.124-.089-.473-.304-.523-.768-.008-.111.079-.204.218-.204.209.057.518.061.786.089.219.014.328.186.123.257m-6.967-4.505c.216.104.624.06.606-.29 0-.031-.008-.135-.011-.163-.044-.103-.164-.078-.192.029-.009.035.015.091-.016.109-.018.018-.087.007-.084-.089 0-.031-.023-.064-.036-.083-.014-.009-.022-.012-.047-.012-.03.001-.03.009-.046.035-.007.025-.017.051-.017.08-.004.034-.017.046-.042.052-.028 0-.022.003-.044-.012-.014-.015-.031-.021-.031-.046a.3.3 0 0 0-.014-.086c-.012-.016-.031-.023-.053-.029-.118 0-.126.135-.119.187-.011.009-.015.251.146.318"
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M17.512 14.027c0-.031-.023-.063-.036-.083-.014-.009-.022-.012-.047-.012-.03.001-.029.009-.046.035-.007.026-.017.051-.017.08-.003.035-.017.047-.042.052-.028 0-.022.003-.045-.011-.014-.015-.031-.021-.031-.046a.3.3 0 0 0-.014-.086q-.019-.022-.053-.028c-.118 0-.126.135-.12.186-.009.01-.014.251.147.319.217.103.732.043.606-.29a3 3 0 0 0-.011-.164c-.044-.103-.165-.077-.192.029-.008.035.016.091-.016.109-.016.018-.086.007-.083-.09m3.397-.707c.216.104.623.06.605-.289a3 3 0 0 0-.011-.164c-.044-.103-.164-.077-.191.029-.009.035.015.091-.017.109-.018.018-.087.008-.084-.089 0-.031-.023-.064-.036-.083-.014-.009-.022-.012-.048-.012-.03.002-.029.009-.046.035-.007.026-.017.051-.017.08-.004.035-.017.047-.042.052-.028 0-.022.003-.045-.011-.014-.015-.03-.021-.03-.046a.3.3 0 0 0-.014-.087q-.02-.022-.054-.028c-.118 0-.126.135-.119.186-.007.01-.012.251.149.318m.146-1.352c.077.216-.059.422.022.452.073.034.177-.223.215-.46.045-.192-.092-.585-.286-.666-.118-.028-.286.042-.232.2-.027.076.238.334.281.474m1.995 5.064c.151.001.325-.345.399-.688.041-.472-.028-.759-.04-1.037s-.313-2.392-.375-2.602c-.073-.397.293-.053.253-.284-.127-.291-.442-.714-.542-.967-.06-.108-.034-.204-.168-.028-.123.405-.166.735-.119.987.318 1.66.644 3.04.592 4.619m3.756-4.34c.035.108-.053.457.02.489.067.036.161-.241.196-.498.019-.141-.084-.633-.261-.721-.108-.03-.261.045-.211.217-.025.083.217.361.256.513m-13.119 3.656c.065.027.154-.177.188-.366.019-.104-.081-.465-.25-.53-.104-.022-.246.006-.202.16-.005.083.23.183.244.376.034.08-.05.337.02.36m-4.556-4.615c.033.083-.033.348.036.373.063.028.152-.184.185-.379.019-.108.004-.474-.246-.549-.103-.023-.246.034-.199.165-.024.062.187.274.224.39m4.902 1.173c-.191.104-.266.412-.146.591.111.159.287.1.311.1.188.023.299-.352.299-.352s.006-.105-.217.094c-.094.018-.106-.017-.129-.071a.46.46 0 0 1 .029-.292c.032-.093-.04-.134-.147-.07m1.442-1.153a.26.26 0 0 0 .118-.174c.029-.146-.155.069-.178-.094-.041-.151.077-.213.189-.359.004-.101.002-.172-.135-.09-.096.065-.288.263-.294.491-.006.129-.03.128.055.21.061.089.122.08.245.016m1.299.078c.124-.336.124-.478.133-.621-.038-.217-.185-.21-.282.031-.042.091-.091.57-.083.57-.033.143.149.204.232.02m8.17 2.383s-1.003.713-1.027.738c-.1.088-.05.4 0 .364.071.028 1.08-.657 1.06-.737.047.002.07-.401-.033-.365m-.123 1.934c.067.036.244-.183.237-.456.02-.141-.051-.658-.227-.746-.108-.03-.252.062-.202.233-.025.082.124.369.163.521.035.109-.044.416.029.448m-5.68 1.496c0 .009.085.082.185.024.21-.081.342-.159.636-.224.077-.001.072-.208-.05-.215-.159.008-.307.016-.466.142-.098.022-.114-.037-.136-.091-.024-.133.055-.225.038-.324.006.006-.091-.083-.19-.033-.005 0-.221.146-.29.248-.043.033-.038.061-.025.116.033.076.092.053.158.017.088-.012.13.046.123.151-.042.133.017.182.017.189m6.551.166c-.033.057-.055.143.047.17.188.053.621-.229.621-.234.07-.053.047-.152.041-.152-.041-.047-.133-.02-.195-.027-.029 0-.127-.015-.08-.101a.6.6 0 0 0 .078-.151c.029-.065.004-.108-.102-.143-.107-.02-.15-.01-.269 0-.064.014-.086.042-.098.12.005.118.076.112.15.159.043.055.071.105-.003.194-.07.065-.119.101-.19.165M25.5 23H24v-.5a.5.5 0 0 0-1 0v.5H11s0 1 3 1h9v.5a.5.5 0 0 0 1 0V24h1v.5a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5"
    }))));
};
_c = SvgArabian;
const __TURBOPACK__default__export__ = SvgArabian;
var _c;
__turbopack_context__.k.register(_c, "SvgArabian");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/svg/English.svg.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _path, _path2, _path3, _path4;
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
;
var SvgEnglish = function SvgEnglish(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        xmlns: "http://www.w3.org/2000/svg",
        width: 100,
        height: 100,
        "aria-hidden": "true",
        className: "English_svg__iconify English_svg__iconify--twemoji",
        viewBox: "0 0 36 36"
    }, props), _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fill: "#00247D",
        d: "M0 9.059V13h5.628zM4.664 31H13v-5.837zM23 25.164V31h8.335zM0 23v3.941L5.63 23zM31.337 5H23v5.837zM36 26.942V23h-5.631zM36 13V9.059L30.371 13zM13 5H4.664L13 10.837z"
    })), _path2 || (_path2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fill: "#CF1B2B",
        d: "m25.14 23 9.712 6.801a4 4 0 0 0 .99-1.749L28.627 23zM13 23h-2.141l-9.711 6.8c.521.53 1.189.909 1.938 1.085L13 23.943zm10-10h2.141l9.711-6.8a4 4 0 0 0-1.937-1.085L23 12.057zm-12.141 0L1.148 6.2a4 4 0 0 0-.991 1.749L7.372 13z"
    })), _path3 || (_path3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fill: "#EEE",
        d: "M36 21H21v10h2v-5.836L31.335 31H32a4 4 0 0 0 2.852-1.199L25.14 23h3.487l7.215 5.052c.093-.337.158-.686.158-1.052v-.058L30.369 23H36zM0 21v2h5.63L0 26.941V27c0 1.091.439 2.078 1.148 2.8l9.711-6.8H13v.943l-9.914 6.941c.294.07.598.116.914.116h.664L13 25.163V31h2V21zM36 9a3.98 3.98 0 0 0-1.148-2.8L25.141 13H23v-.943l9.915-6.942A4 4 0 0 0 32 5h-.663L23 10.837V5h-2v10h15v-2h-5.629L36 9.059zM13 5v5.837L4.664 5H4a3.99 3.99 0 0 0-2.852 1.2l9.711 6.8H7.372L.157 7.949A4 4 0 0 0 0 9v.059L5.628 13H0v2h15V5z"
    })), _path4 || (_path4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fill: "#CF1B2B",
        d: "M21 15V5h-6v10H0v6h15v10h6V21h15v-6z"
    })));
};
_c = SvgEnglish;
const __TURBOPACK__default__export__ = SvgEnglish;
var _c;
__turbopack_context__.k.register(_c, "SvgEnglish");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/svg/Facebook.svg.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _path;
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
;
var SvgFacebook = function SvgFacebook(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        xmlns: "http://www.w3.org/2000/svg",
        width: 800,
        height: 800,
        viewBox: "0 0 24 24"
    }, props), _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        d: "M20 1a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3zm0 2a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-5v-7h2.076a1 1 0 0 0 .949-.684l.443-1.329a.75.75 0 0 0-.712-.987H15V9c0-.5.5-1 1-1h2a1 1 0 0 0 1-1v-.686a.71.71 0 0 0-.519-.695C17.171 5.273 16 5.273 16 5.273c-2.5 0-4 1.727-4 3.227V11h-2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2v7H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z",
        clipRule: "evenodd"
    })));
};
_c = SvgFacebook;
const __TURBOPACK__default__export__ = SvgFacebook;
var _c;
__turbopack_context__.k.register(_c, "SvgFacebook");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/svg/Instagram.svg.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _path, _path2, _path3;
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
;
var SvgInstagram = function SvgInstagram(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        xmlns: "http://www.w3.org/2000/svg",
        width: 800,
        height: 800,
        viewBox: "0 0 24 24"
    }, props), _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        d: "M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12m0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8",
        clipRule: "evenodd"
    })), _path2 || (_path2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("path", {
        d: "M18 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
    })), _path3 || (_path3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        d: "M1.654 4.276C1 5.56 1 7.24 1 10.6v2.8c0 3.36 0 5.04.654 6.324a6 6 0 0 0 2.622 2.622C5.56 23 7.24 23 10.6 23h2.8c3.36 0 5.04 0 6.324-.654a6 6 0 0 0 2.622-2.622C23 18.44 23 16.76 23 13.4v-2.8c0-3.36 0-5.04-.654-6.324a6 6 0 0 0-2.622-2.622C18.44 1 16.76 1 13.4 1h-2.8c-3.36 0-5.04 0-6.324.654a6 6 0 0 0-2.622 2.622M13.4 3h-2.8c-1.713 0-2.878.002-3.778.075-.877.072-1.325.202-1.638.361a4 4 0 0 0-1.748 1.748c-.16.313-.29.761-.36 1.638C3.001 7.722 3 8.887 3 10.6v2.8c0 1.713.002 2.878.075 3.778.072.877.202 1.325.361 1.638a4 4 0 0 0 1.748 1.748c.313.16.761.29 1.638.36.9.074 2.065.076 3.778.076h2.8c1.713 0 2.878-.002 3.778-.075.877-.072 1.325-.202 1.638-.361a4 4 0 0 0 1.748-1.748c.16-.313.29-.761.36-1.638.074-.9.076-2.065.076-3.778v-2.8c0-1.713-.002-2.878-.075-3.778-.072-.877-.202-1.325-.361-1.638a4 4 0 0 0-1.748-1.748c-.313-.16-.761-.29-1.638-.36C16.278 3.001 15.113 3 13.4 3",
        clipRule: "evenodd"
    })));
};
_c = SvgInstagram;
const __TURBOPACK__default__export__ = SvgInstagram;
var _c;
__turbopack_context__.k.register(_c, "SvgInstagram");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/svg/Youtube.svg.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _path, _path2;
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), _extends.apply(null, arguments);
}
;
var SvgYoutube = function SvgYoutube(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", _extends({
        xmlns: "http://www.w3.org/2000/svg",
        width: 800,
        height: 800,
        viewBox: "0 0 24 24"
    }, props), _path || (_path = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        d: "M9.496 7.132A1 1 0 0 0 8 8v8a1 1 0 0 0 1.496.868l7-4a1 1 0 0 0 0-1.736zM13.984 12 10 14.277V9.723z",
        clipRule: "evenodd"
    })), _path2 || (_path2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("path", {
        fillRule: "evenodd",
        d: "M0 12c0-3.75 0-5.625.955-6.939A5 5 0 0 1 2.06 3.955C3.375 3 5.251 3 9 3h6c3.75 0 5.625 0 6.939.955a5 5 0 0 1 1.106 1.106C24 6.375 24 8.251 24 12s0 5.625-.955 6.939a5 5 0 0 1-1.106 1.106C20.625 21 18.749 21 15 21H9c-3.75 0-5.625 0-6.939-.955A5 5 0 0 1 .955 18.94C0 17.625 0 15.749 0 12m9-7h6c1.92 0 3.198.003 4.167.108.932.1 1.337.276 1.596.465.255.185.479.409.664.664.189.26.364.664.465 1.596.105.969.108 2.248.108 4.167 0 1.92-.003 3.198-.108 4.167-.1.932-.276 1.337-.465 1.596q-.28.384-.664.664c-.259.189-.664.364-1.596.465-.969.105-2.248.108-4.167.108H9c-1.92 0-3.198-.003-4.167-.108-.932-.1-1.337-.276-1.596-.465a3 3 0 0 1-.664-.664c-.189-.259-.364-.664-.465-1.596C2.003 15.198 2 13.92 2 12c0-1.92.003-3.198.108-4.167.1-.932.276-1.337.465-1.596a3 3 0 0 1 .664-.664c.259-.189.664-.364 1.596-.465C5.802 5.003 7.08 5 9 5",
        clipRule: "evenodd"
    })));
};
_c = SvgYoutube;
const __TURBOPACK__default__export__ = SvgYoutube;
var _c;
__turbopack_context__.k.register(_c, "SvgYoutube");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/svg/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({});
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/svg/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$svg$2f$Georgian$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public/svg/Georgian.svg.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$svg$2f$Russian$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public/svg/Russian.svg.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$svg$2f$Arabian$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public/svg/Arabian.svg.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$svg$2f$English$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public/svg/English.svg.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$svg$2f$Facebook$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public/svg/Facebook.svg.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$svg$2f$Instagram$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public/svg/Instagram.svg.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$svg$2f$Youtube$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public/svg/Youtube.svg.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/svg/index.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/public/svg/English.svg.js [app-client] (ecmascript) <export default as English>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "English": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$public$2f$svg$2f$English$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$svg$2f$English$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public/svg/English.svg.js [app-client] (ecmascript)");
}}),
"[project]/public/svg/Georgian.svg.js [app-client] (ecmascript) <export default as Georgian>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Georgian": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$public$2f$svg$2f$Georgian$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$svg$2f$Georgian$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public/svg/Georgian.svg.js [app-client] (ecmascript)");
}}),
"[project]/public/svg/Russian.svg.js [app-client] (ecmascript) <export default as Russian>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Russian": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$public$2f$svg$2f$Russian$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$svg$2f$Russian$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public/svg/Russian.svg.js [app-client] (ecmascript)");
}}),
"[project]/src/i18n/LocaleSwitcher.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>LocaleSwitcher)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/use-intl/dist/esm/development/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/routing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/popover.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/svg/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$svg$2f$English$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__English$3e$__ = __turbopack_context__.i("[project]/public/svg/English.svg.js [app-client] (ecmascript) <export default as English>");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$svg$2f$Georgian$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Georgian$3e$__ = __turbopack_context__.i("[project]/public/svg/Georgian.svg.js [app-client] (ecmascript) <export default as Georgian>");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$svg$2f$Russian$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Russian$3e$__ = __turbopack_context__.i("[project]/public/svg/Russian.svg.js [app-client] (ecmascript) <export default as Russian>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const LanguageFlags = {
    en: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$public$2f$svg$2f$English$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__English$3e$__["English"], {
            className: "h-6 w-6"
        }, void 0, false, {
            fileName: "[project]/src/i18n/LocaleSwitcher.tsx",
            lineNumber: 19,
            columnNumber: 13
        }, this),
    ka: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$public$2f$svg$2f$Georgian$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Georgian$3e$__["Georgian"], {
            className: "h-6 w-6"
        }, void 0, false, {
            fileName: "[project]/src/i18n/LocaleSwitcher.tsx",
            lineNumber: 20,
            columnNumber: 13
        }, this),
    ru: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$public$2f$svg$2f$Russian$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Russian$3e$__["Russian"], {
            className: "h-6 w-6"
        }, void 0, false, {
            fileName: "[project]/src/i18n/LocaleSwitcher.tsx",
            lineNumber: 21,
            columnNumber: 13
        }, this)
};
const languageNames = {
    en: "English",
    ka: "ქართული",
    ru: "Русский"
};
function LocaleSwitcher() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const currentLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"])();
    const handleLocaleChange = (newLocale)=>{
        if (newLocale === currentLocale) return;
        const pathWithoutLocale = pathname.replace(new RegExp(`^/${currentLocale}`), "");
        const searchParams = new URLSearchParams(window.location.search).toString();
        const queryString = searchParams ? `?${searchParams}` : "";
        const newPath = `/${newLocale}${pathWithoutLocale}${queryString}`;
        router.push(newPath);
        router.refresh();
    };
    const CurrentFlag = LanguageFlags[currentLocale];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "flex items-center gap-2  cursor-pointer rounded-full h-9 px-3 py-3 bg-white text-black border border-input hover:bg-gray-50  hover:text-accent-foreground",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CurrentFlag, {}, void 0, false, {
                            fileName: "[project]/src/i18n/LocaleSwitcher.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                            className: "h-4 w-4 opacity-50"
                        }, void 0, false, {
                            fileName: "[project]/src/i18n/LocaleSwitcher.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/i18n/LocaleSwitcher.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/i18n/LocaleSwitcher.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverContent"], {
                className: "w-48 p-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-1",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["locales"].map((locale)=>{
                        const Flag = LanguageFlags[locale];
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            className: "justify-start gap-2 w-full",
                            onClick: ()=>handleLocaleChange(locale),
                            disabled: locale === currentLocale,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Flag, {}, void 0, false, {
                                    fileName: "[project]/src/i18n/LocaleSwitcher.tsx",
                                    lineNumber: 72,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: languageNames[locale]
                                }, void 0, false, {
                                    fileName: "[project]/src/i18n/LocaleSwitcher.tsx",
                                    lineNumber: 73,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, locale, true, {
                            fileName: "[project]/src/i18n/LocaleSwitcher.tsx",
                            lineNumber: 65,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/i18n/LocaleSwitcher.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/i18n/LocaleSwitcher.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/i18n/LocaleSwitcher.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(LocaleSwitcher, "BzQ60aO0Rh67ubEIDNScXk43h74=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"]
    ];
});
_c = LocaleSwitcher;
var _c;
__turbopack_context__.k.register(_c, "LocaleSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/use-media-query.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useMediaQuery": (()=>useMediaQuery)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useMediaQuery(query) {
    _s();
    const [matches, setMatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMediaQuery.useEffect": ()=>{
            const media = window.matchMedia(query);
            if (media.matches !== matches) {
                setMatches(media.matches);
            }
            const listener = {
                "useMediaQuery.useEffect.listener": ()=>setMatches(media.matches)
            }["useMediaQuery.useEffect.listener"];
            media.addEventListener("change", listener);
            return ({
                "useMediaQuery.useEffect": ()=>media.removeEventListener("change", listener)
            })["useMediaQuery.useEffect"];
        }
    }["useMediaQuery.useEffect"], [
        matches,
        query
    ]);
    return matches;
}
_s(useMediaQuery, "/aV7jSECvYA0Ea4uAEPK2AzROhs=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/images/LogoAisi.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/LogoAisi.016d893b.png");}}),
"[project]/public/images/LogoAisi.png.mjs { IMAGE => \"[project]/public/images/LogoAisi.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$LogoAisi$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/LogoAisi.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$LogoAisi$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 768,
    height: 768,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAWElEQVR42m3NsQ2AIBCFYTgB1zCxOTcwxCEsqDSMYOcILmBNR0eYgAVYgIXojpDwuvc1P2PjKTnL7r72e1QjXLIvCVeC+wx/dNYQaDT7deiNYOICBAAf9ir9SAtNCEpzQgAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/header/Header.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Header)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$LocaleSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/LocaleSwitcher.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$use$2d$media$2d$query$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/use-media-query.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/use-intl/dist/esm/development/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$LogoAisi$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$LogoAisi$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/LogoAisi.png.mjs { IMAGE => "[project]/public/images/LogoAisi.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
function Header() {
    _s();
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$use$2d$media$2d$query$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"])("(max-width: 768px)");
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isProjectsOpen, setIsProjectsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"])();
    const navItems = [
        {
            name: "Main",
            href: "/"
        },
        {
            name: "Projects",
            href: "/projects",
            subItems: [
                {
                    name: "AISI Batumi",
                    href: "/aisi-batumi"
                },
                {
                    name: "AISI Goderdzi",
                    href: "/aisi-goderdzi"
                }
            ]
        },
        {
            name: "Contact",
            href: "/contact"
        }
    ];
    const isActive = (href)=>{
        return pathname === `/${locale}${href}` || href === "/" && pathname === `/${locale}` || href === "/projects" && pathname.startsWith(`/${locale}/projects`);
    };
    const isSubItemActive = (href)=>{
        return pathname === `/${locale}${href}`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "absolute w-full flex flex-col items-center z-50 px-6 lg:px-16 pt-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                y: -20,
                opacity: 0
            },
            animate: {
                y: 0,
                opacity: 1
            },
            transition: {
                duration: 0.5
            },
            className: "w-full h-16 lg:h-20 flex items-center justify-between relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        delay: 0.2,
                        duration: 0.5
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/${locale}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$LogoAisi$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$LogoAisi$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"] || "/placeholder.svg",
                            alt: "AISI Logo",
                            className: "w-28 md:w-36 h-auto cursor-pointer md:ml-10"
                        }, void 0, false, {
                            fileName: "[project]/src/components/header/Header.tsx",
                            lineNumber: 60,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/header/Header.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/header/Header.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this),
                isMobile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                delay: 0.3,
                                duration: 0.5
                            },
                            onClick: ()=>setIsMenuOpen(!isMenuOpen),
                            className: "text-white p-2",
                            whileHover: {
                                scale: 1.1
                            },
                            whileTap: {
                                scale: 0.9
                            },
                            children: isMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/src/components/header/Header.tsx",
                                lineNumber: 78,
                                columnNumber: 29
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/src/components/header/Header.tsx",
                                lineNumber: 78,
                                columnNumber: 47
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/header/Header.tsx",
                            lineNumber: 69,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            children: isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: -10
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                exit: {
                                    opacity: 0,
                                    y: -10
                                },
                                transition: {
                                    duration: 0.3
                                },
                                className: "absolute top-20 left-0 right-0 bg-black/80 backdrop-blur-md rounded-b-xl p-4 flex flex-col gap-4 border-t border-white/20",
                                children: [
                                    navItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    x: -10
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    x: 0
                                                },
                                                transition: {
                                                    delay: index * 0.1,
                                                    duration: 0.3
                                                },
                                                children: item.subItems ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setIsProjectsOpen(!isProjectsOpen),
                                                            className: `text-white text-lg flex items-center w-full py-2 hover:text-indigo-200 cursor-pointer ${isActive(item.href) ? "font-medium" : ""}`,
                                                            children: [
                                                                item.name,
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                    size: 16,
                                                                    className: `ml-1 transition-transform duration-300 ${isProjectsOpen ? "rotate-180" : ""}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/header/Header.tsx",
                                                                    lineNumber: 105,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute left-0 bottom-0 w-full h-0.5",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `h-full bg-gradient-to-r from-indigo-500 to-indigo-300 transition-all duration-300 ${isActive(item.href) ? "w-full" : "w-0"}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/header/Header.tsx",
                                                                        lineNumber: 112,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/header/Header.tsx",
                                                                    lineNumber: 111,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/header/Header.tsx",
                                                            lineNumber: 98,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                            children: isProjectsOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                initial: {
                                                                    opacity: 0,
                                                                    height: 0
                                                                },
                                                                animate: {
                                                                    opacity: 1,
                                                                    height: "auto"
                                                                },
                                                                exit: {
                                                                    opacity: 0,
                                                                    height: 0
                                                                },
                                                                transition: {
                                                                    duration: 0.3
                                                                },
                                                                className: "pl-4 mt-2 space-y-2",
                                                                children: item.subItems.map((subItem)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                        initial: {
                                                                            opacity: 0,
                                                                            x: -5
                                                                        },
                                                                        animate: {
                                                                            opacity: 1,
                                                                            x: 0
                                                                        },
                                                                        transition: {
                                                                            duration: 0.2
                                                                        },
                                                                        className: "relative bg-white/5 backdrop-blur-md rounded-md px-3 py-2 hover:bg-white/10 transition-colors duration-200",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: `/${locale}${subItem.href}`,
                                                                            className: `text-white text-base block hover:text-indigo-200 ${isSubItemActive(subItem.href) ? "font-medium" : ""}`,
                                                                            onClick: ()=>{
                                                                                setIsMenuOpen(false);
                                                                                setIsProjectsOpen(false);
                                                                            },
                                                                            children: [
                                                                                subItem.name,
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "absolute left-0 bottom-0 w-full h-0.5",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: `h-full bg-gradient-to-r from-indigo-500 to-indigo-300 transition-all duration-300 ${isSubItemActive(subItem.href) ? "w-full" : "w-0 hover:w-full"}`
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/header/Header.tsx",
                                                                                        lineNumber: 150,
                                                                                        columnNumber: 43
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/header/Header.tsx",
                                                                                    lineNumber: 149,
                                                                                    columnNumber: 41
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/header/Header.tsx",
                                                                            lineNumber: 136,
                                                                            columnNumber: 39
                                                                        }, this)
                                                                    }, subItem.name, false, {
                                                                        fileName: "[project]/src/components/header/Header.tsx",
                                                                        lineNumber: 129,
                                                                        columnNumber: 37
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/header/Header.tsx",
                                                                lineNumber: 121,
                                                                columnNumber: 33
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/header/Header.tsx",
                                                            lineNumber: 119,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/header/Header.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 27
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/${locale}${item.href}`,
                                                    className: `text-white text-lg block py-2 hover:text-indigo-200 relative ${isActive(item.href) ? "font-medium" : ""}`,
                                                    onClick: ()=>setIsMenuOpen(false),
                                                    children: [
                                                        item.name,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute left-0 bottom-0 w-full h-0.5",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `h-full bg-gradient-to-r from-indigo-500 to-indigo-300 transition-all duration-300 ${isActive(item.href) ? "w-full" : "w-0 hover:w-full"}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/header/Header.tsx",
                                                                lineNumber: 175,
                                                                columnNumber: 31
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/header/Header.tsx",
                                                            lineNumber: 174,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/header/Header.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/header/Header.tsx",
                                                lineNumber: 91,
                                                columnNumber: 23
                                            }, this)
                                        }, item.name, false, {
                                            fileName: "[project]/src/components/header/Header.tsx",
                                            lineNumber: 90,
                                            columnNumber: 21
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$LocaleSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/src/components/header/Header.tsx",
                                        lineNumber: 188,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/header/Header.tsx",
                                lineNumber: 82,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/header/Header.tsx",
                            lineNumber: 80,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center space-x-4 lg:space-x-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "space-x-4 lg:space-x-6 xl:space-x-10",
                            children: navItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                    initial: {
                                        opacity: 0,
                                        y: -10
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: 0.3 + index * 0.1,
                                        duration: 0.5
                                    },
                                    className: "relative inline-block",
                                    children: item.subItems ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative inline-block",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setIsProjectsOpen(!isProjectsOpen),
                                                className: `text-white text-base lg:text-lg hover:text-gray-300 group inline-flex items-center pb-1 cursor-pointer ${isActive(item.href) ? "font-medium" : ""}`,
                                                children: [
                                                    item.name,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        size: 16,
                                                        className: `ml-1 transition-transform duration-300 ${isProjectsOpen ? "rotate-180" : ""}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header/Header.tsx",
                                                        lineNumber: 213,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute left-0 bottom-0 w-full h-0.5 overflow-hidden",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `h-full bg-gradient-to-r from-indigo-500 to-indigo-300 transition-all duration-300 ${isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/header/Header.tsx",
                                                            lineNumber: 220,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header/Header.tsx",
                                                        lineNumber: 219,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/header/Header.tsx",
                                                lineNumber: 206,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                children: isProjectsOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        opacity: 0,
                                                        y: 10
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        y: 0
                                                    },
                                                    exit: {
                                                        opacity: 0,
                                                        y: 10
                                                    },
                                                    transition: {
                                                        duration: 0.2
                                                    },
                                                    className: "absolute left-0 mt-2 w-48 bg-black/60 backdrop-blur-lg rounded-lg py-2 shadow-xl z-10 border border-white/20",
                                                    children: item.subItems.map((subItem)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                            initial: {
                                                                opacity: 0,
                                                                x: -5
                                                            },
                                                            animate: {
                                                                opacity: 1,
                                                                x: 0
                                                            },
                                                            transition: {
                                                                duration: 0.2
                                                            },
                                                            className: "relative px-4 py-2 hover:bg-white/10 transition-colors duration-200",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: `/${locale}${subItem.href}`,
                                                                className: `text-white text-sm block hover:text-indigo-200 relative ${isSubItemActive(subItem.href) ? "font-medium" : ""}`,
                                                                onClick: ()=>setIsProjectsOpen(false),
                                                                children: [
                                                                    subItem.name,
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "absolute left-0 bottom-0 w-full h-0.5",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: `h-full bg-gradient-to-r from-indigo-500 to-indigo-300 transition-all duration-300 ${isSubItemActive(subItem.href) ? "w-full" : "w-0 hover:w-full"}`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/header/Header.tsx",
                                                                            lineNumber: 257,
                                                                            columnNumber: 37
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/header/Header.tsx",
                                                                        lineNumber: 256,
                                                                        columnNumber: 35
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/header/Header.tsx",
                                                                lineNumber: 246,
                                                                columnNumber: 33
                                                            }, this)
                                                        }, subItem.name, false, {
                                                            fileName: "[project]/src/components/header/Header.tsx",
                                                            lineNumber: 239,
                                                            columnNumber: 31
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/header/Header.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/header/Header.tsx",
                                                lineNumber: 229,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/header/Header.tsx",
                                        lineNumber: 205,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/${locale}${item.href}`,
                                        className: `text-white text-base lg:text-lg hover:text-gray-300 group inline-block pb-1 ${isActive(item.href) ? "font-medium" : ""}`,
                                        children: [
                                            item.name,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute left-0 bottom-0 w-full h-0.5 overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `h-full bg-gradient-to-r from-indigo-500 to-indigo-300 transition-all duration-300 ${isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/header/Header.tsx",
                                                    lineNumber: 281,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/header/Header.tsx",
                                                lineNumber: 280,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/header/Header.tsx",
                                        lineNumber: 273,
                                        columnNumber: 21
                                    }, this)
                                }, item.name, false, {
                                    fileName: "[project]/src/components/header/Header.tsx",
                                    lineNumber: 197,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/header/Header.tsx",
                            lineNumber: 195,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                delay: 0.8,
                                duration: 0.5
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$LocaleSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/components/header/Header.tsx",
                                lineNumber: 299,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/header/Header.tsx",
                            lineNumber: 294,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/header/Header.tsx",
                    lineNumber: 194,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        scaleX: 0,
                        opacity: 0
                    },
                    animate: {
                        scaleX: 1,
                        opacity: 1
                    },
                    transition: {
                        delay: 0.6,
                        duration: 0.5
                    },
                    className: "absolute bottom-0 left-0 right-0 w-full h-px bg-indigo-100"
                }, void 0, false, {
                    fileName: "[project]/src/components/header/Header.tsx",
                    lineNumber: 303,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/header/Header.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/header/Header.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s(Header, "9zAPdunKSGYOEPGSOQFq5FNmU08=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$use$2d$media$2d$query$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/reactQuery/queryProvider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>QueryProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2d$devtools$2f$build$2f$modern$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query-devtools/build/modern/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function QueryProvider({ children }) {
    _s();
    const [queryClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "QueryProvider.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"]({
                defaultOptions: {
                    queries: {
                        staleTime: 60 * 1000,
                        gcTime: 60 * 60 * 1000
                    }
                }
            })
    }["QueryProvider.useState"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: queryClient,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2d$devtools$2f$build$2f$modern$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactQueryDevtools"], {
                initialIsOpen: false
            }, void 0, false, {
                fileName: "[project]/src/reactQuery/queryProvider.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/reactQuery/queryProvider.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(QueryProvider, "uIkDi6wDmvPt5eQxipsk41n8ZvY=");
_c = QueryProvider;
var _c;
__turbopack_context__.k.register(_c, "QueryProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utils/axiosInstance.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "axiosInstance": (()=>axiosInstance)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const axiosInstance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: ("TURBOPACK compile-time value", "https://api.aisigroup.ge/api"),
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/routes/auth.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "authAPI": (()=>authAPI)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$axiosInstance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/axiosInstance.ts [app-client] (ecmascript)");
;
const authAPI = {
    login: async (credentials)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$axiosInstance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post('/signin', credentials);
        return response.data;
    },
    signup: async (credentials)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$axiosInstance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post('/signup', credentials);
        return response.data;
    },
    signout: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$axiosInstance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post('/signout');
        return response.data;
    },
    checkAuthStatus: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$axiosInstance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axiosInstance"].post('/status');
        return response.data;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/auth/AuthProvider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AuthProvider": (()=>AuthProvider),
    "useAuth": (()=>useAuth)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$routes$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/routes/auth.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const AuthProvider = ({ children })=>{
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isAuthenticated, setIsAuthenticated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const checkAuth = async ()=>{
        try {
            const token = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("token");
            if (!token) {
                setIsAuthenticated(false);
                setUser(null);
                setIsLoading(false);
                return;
            }
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$routes$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authAPI"].checkAuthStatus();
            if (response.user) {
                setUser(response.user);
                setIsAuthenticated(true);
            } else {
                setUser(null);
                setIsAuthenticated(false);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove("token");
            }
        } catch (error) {
            console.error("Auth verification failed:", error);
            setUser(null);
            setIsAuthenticated(false);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove("token");
        } finally{
            setIsLoading(false);
        }
    };
    const login = (token)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].set("token", token, {
            secure: ("TURBOPACK compile-time value", "development") === "production",
            sameSite: "strict"
        });
        checkAuth();
    };
    const logout = async ()=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$routes$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authAPI"].signout();
        } catch (error) {
            console.error("Logout error:", error);
        } finally{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove("token");
            setUser(null);
            setIsAuthenticated(false);
            router.push("/");
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            checkAuth();
        }
    }["AuthProvider.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            isAuthenticated,
            isLoading,
            login,
            logout,
            checkAuth
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/auth/AuthProvider.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
};
_s(AuthProvider, "Azk+wQeTyKSnc/V+wKqsppTVou4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AuthProvider;
const useAuth = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
_s1(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/svg/Facebook.svg.js [app-client] (ecmascript) <export default as Facebook>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Facebook": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$public$2f$svg$2f$Facebook$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$svg$2f$Facebook$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public/svg/Facebook.svg.js [app-client] (ecmascript)");
}}),
"[project]/public/svg/Instagram.svg.js [app-client] (ecmascript) <export default as Instagram>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Instagram": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$public$2f$svg$2f$Instagram$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$svg$2f$Instagram$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public/svg/Instagram.svg.js [app-client] (ecmascript)");
}}),
"[project]/src/components/footer/Footer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Footer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/use-intl/dist/esm/development/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$LogoAisi$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$LogoAisi$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/LogoAisi.png.mjs { IMAGE => "[project]/public/images/LogoAisi.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/svg/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$svg$2f$Facebook$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/public/svg/Facebook.svg.js [app-client] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$svg$2f$Instagram$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/public/svg/Instagram.svg.js [app-client] (ecmascript) <export default as Instagram>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function Footer() {
    _s();
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"])();
    const navItems = [
        {
            name: "Main",
            href: "/"
        },
        {
            name: "Projects",
            href: "/projects"
        },
        {
            name: "Contact",
            href: "/contact"
        }
    ];
    const projectItems = [
        {
            name: "AISI Batumi",
            href: "/projects/batumi"
        },
        {
            name: "AISI Goderdzi",
            href: "/projects/goderdzi"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "relative w-full mt-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/70 backdrop-blur-sm"
                }, void 0, false, {
                    fileName: "[project]/src/components/footer/Footer.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/footer/Footer.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 container mx-auto px-6 lg:px-8 pt-10 pb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.5
                                },
                                className: "hidden md:flex flex-col",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/${locale}`,
                                    className: "inline-block mb-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$LogoAisi$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$LogoAisi$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"] || "/placeholder.svg",
                                        alt: "AISI Logo",
                                        className: "w-32 h-auto"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/footer/Footer.tsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/footer/Footer.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/footer/Footer.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.5,
                                    delay: 0.1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-white text-lg font-medium mb-6 pb-2 border-b border-indigo-500/30",
                                        children: "Navigation"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/footer/Footer.tsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-3",
                                        children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/${locale}${item.href}`,
                                                    className: "text-gray-300 hover:text-indigo-300 transition-colors duration-200 flex items-center group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-200"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/footer/Footer.tsx",
                                                            lineNumber: 61,
                                                            columnNumber: 21
                                                        }, this),
                                                        item.name
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/footer/Footer.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 19
                                                }, this)
                                            }, item.name, false, {
                                                fileName: "[project]/src/components/footer/Footer.tsx",
                                                lineNumber: 56,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/footer/Footer.tsx",
                                        lineNumber: 54,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/footer/Footer.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.5,
                                    delay: 0.2
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-white text-lg font-medium mb-6 pb-2 border-b border-indigo-500/30",
                                        children: "Our Projects"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/footer/Footer.tsx",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-3",
                                        children: projectItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/${locale}${item.href}`,
                                                    className: "text-gray-300 hover:text-indigo-300 transition-colors duration-200 flex items-center group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-200"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/footer/Footer.tsx",
                                                            lineNumber: 83,
                                                            columnNumber: 21
                                                        }, this),
                                                        item.name
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/footer/Footer.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 19
                                                }, this)
                                            }, item.name, false, {
                                                fileName: "[project]/src/components/footer/Footer.tsx",
                                                lineNumber: 78,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/footer/Footer.tsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/footer/Footer.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.5,
                                    delay: 0.3
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-white text-lg font-medium mb-6 pb-2 border-b border-indigo-500/30",
                                        children: "Contact Us"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/footer/Footer.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                        size: 18,
                                                        className: "text-indigo-400 mr-3 mt-1 flex-shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/footer/Footer.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-300",
                                                        children: "123 Construction Avenue, Batumi, Georgia"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/footer/Footer.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/footer/Footer.tsx",
                                                lineNumber: 99,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                        size: 18,
                                                        className: "text-indigo-400 mr-3 flex-shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/footer/Footer.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-300",
                                                        children: "+995 123 456 789"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/footer/Footer.tsx",
                                                        lineNumber: 113,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/footer/Footer.tsx",
                                                lineNumber: 108,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                        size: 18,
                                                        className: "text-indigo-400 mr-3 flex-shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/footer/Footer.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-300",
                                                        children: "info@aisidevelopment.com"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/footer/Footer.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/footer/Footer.tsx",
                                                lineNumber: 115,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/footer/Footer.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex space-x-4 mt-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                                href: "#",
                                                whileHover: {
                                                    scale: 1.1
                                                },
                                                whileTap: {
                                                    scale: 0.95
                                                },
                                                className: "bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-200",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$public$2f$svg$2f$Facebook$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"], {
                                                    size: 18,
                                                    className: "w-4 h-4 fill-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/footer/Footer.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/footer/Footer.tsx",
                                                lineNumber: 125,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                                href: "#",
                                                whileHover: {
                                                    scale: 1.1
                                                },
                                                whileTap: {
                                                    scale: 0.95
                                                },
                                                className: "bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-200",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$public$2f$svg$2f$Instagram$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"], {
                                                    size: 18,
                                                    className: "w-4 h-4 fill-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/footer/Footer.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/footer/Footer.tsx",
                                                lineNumber: 133,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/footer/Footer.tsx",
                                        lineNumber: 124,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/footer/Footer.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/footer/Footer.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            duration: 0.5,
                            delay: 0.5
                        },
                        className: "mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-center items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 text-center text-sm mb-4 md:mb-0",
                            children: [
                                "© ",
                                new Date().getFullYear(),
                                " Digital Port"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/footer/Footer.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/footer/Footer.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/footer/Footer.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 via-indigo-400 to-indigo-600"
            }, void 0, false, {
                fileName: "[project]/src/components/footer/Footer.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/footer/Footer.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(Footer, "ubkSS9Gz1bw7UV2c73rm/bCUdh8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"]
    ];
});
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_2792fcf0._.js.map