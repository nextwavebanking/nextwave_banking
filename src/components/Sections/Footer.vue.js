import Data from '../../assets/Data/Data.json';
const { Footer } = Data.section;
const nextWave = new URL('../../assets/log/Logo Next Wavesmall.jpg', import.meta.url).href;
const instagramIcon = new URL('../../assets/log/Vector.svg', import.meta.url).href;
const xIcon = new URL('../../assets/log/Vector (2).svg', import.meta.url).href;
const youTubeIcon = new URL('../../assets/log/Vector (5).svg', import.meta.url).href;
const LinkedInIcon = new URL('../../assets/log/linkedin.svg', import.meta.url).href;
const emit = defineEmits();
const handleClick = (value) => {
    emit('scroll-to', value);
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['footer']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "footer flex flex-col" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "footer-header" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "footer-icon flex justify-between max-lg:flex-col max-lg:gap-[36px]" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)(Object.assign({ src: (__VLS_ctx.nextWave), alt: "Logo" }, { class: "w-[146px] h-[36px]" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "flex lg:justify-end gap-[40px] max-lg:justify-start" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: (__VLS_ctx.instagramIcon),
    alt: "",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: (__VLS_ctx.xIcon),
    alt: "",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: (__VLS_ctx.youTubeIcon),
    alt: "",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: (__VLS_ctx.LinkedInIcon),
    alt: "",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "footer-body gap-[135px]" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "text-wrapper flex max-2xl:flex-col gap-[24px]" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "contact-us flex flex-col w-full" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "footer-list-header body-md-medium-uppercase" }));
(__VLS_ctx.Footer.contactUs.title);
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "body-lg-medium" }));
(__VLS_ctx.Footer.contactUs.body);
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "body-lg-medium" }));
(__VLS_ctx.Footer.contactUs.email);
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "body-lg-medium" }));
(__VLS_ctx.Footer.contactUs.phone);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "gap-[14px] flex flex-col w-full" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "footer-list-header body-md-medium-uppercase" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "flex flex-col" }));
for (const [item] of __VLS_getVForSourceType((__VLS_ctx.Footer.quickLinks))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ onClick: (...[$event]) => {
            __VLS_ctx.handleClick(item.value);
        } }, { class: "item link" }));
    (item.text);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "gap-[14px] flex flex-col w-full" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "footer-list-header body-md-medium-uppercase" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "flex flex-col" }));
for (const [item] of __VLS_getVForSourceType((__VLS_ctx.Footer.services))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "item" }));
    (item);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "footer-end flex justify-between items-center max-2xl:flex-col max-2xl:items-start" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "body-lg-medium" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "flex gap-[40px]" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "body-lg-medium" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "body-lg-medium" }));
/** @type {__VLS_StyleScopedClasses['footer']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['footer-header']} */ ;
/** @type {__VLS_StyleScopedClasses['footer-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['max-lg:flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['max-lg:gap-[36px]']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[146px]']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[36px]']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:justify-end']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-[40px]']} */ ;
/** @type {__VLS_StyleScopedClasses['max-lg:justify-start']} */ ;
/** @type {__VLS_StyleScopedClasses['footer-body']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-[135px]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['max-2xl:flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-[24px]']} */ ;
/** @type {__VLS_StyleScopedClasses['contact-us']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['footer-list-header']} */ ;
/** @type {__VLS_StyleScopedClasses['body-md-medium-uppercase']} */ ;
/** @type {__VLS_StyleScopedClasses['body-lg-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['body-lg-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['body-lg-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-[14px]']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['footer-list-header']} */ ;
/** @type {__VLS_StyleScopedClasses['body-md-medium-uppercase']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['item']} */ ;
/** @type {__VLS_StyleScopedClasses['link']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-[14px]']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['footer-list-header']} */ ;
/** @type {__VLS_StyleScopedClasses['body-md-medium-uppercase']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['item']} */ ;
/** @type {__VLS_StyleScopedClasses['footer-end']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['max-2xl:flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['max-2xl:items-start']} */ ;
/** @type {__VLS_StyleScopedClasses['body-lg-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-[40px]']} */ ;
/** @type {__VLS_StyleScopedClasses['body-lg-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['body-lg-medium']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Footer: Footer,
            nextWave: nextWave,
            instagramIcon: instagramIcon,
            xIcon: xIcon,
            youTubeIcon: youTubeIcon,
            LinkedInIcon: LinkedInIcon,
            handleClick: handleClick,
        };
    },
    __typeEmits: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
});
; /* PartiallyEnd: #4569/main.vue */
