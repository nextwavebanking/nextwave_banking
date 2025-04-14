import { computed } from 'vue';
const props = defineProps();
const emit = defineEmits();
const iconColor = computed(() => {
    switch (props.btnType) {
        case 'primary':
            return 'white';
        case 'secondary':
            return 'white';
        case 'ghost':
            return '#1D1D1D ';
        case 'outlined':
            return '#1D1D1D';
        case 'light':
            return '#1D1D1D';
        case 'disabled':
            return 'white';
    }
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['commonButton']} */ ;
/** @type {__VLS_StyleScopedClasses['commonButton']} */ ;
/** @type {__VLS_StyleScopedClasses['commonButton']} */ ;
/** @type {__VLS_StyleScopedClasses['commonButton']} */ ;
/** @type {__VLS_StyleScopedClasses['commonButton']} */ ;
/** @type {__VLS_StyleScopedClasses['commonButton']} */ ;
/** @type {__VLS_StyleScopedClasses['commonButton']} */ ;
/** @type {__VLS_StyleScopedClasses['commonButton']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(Object.assign(Object.assign(Object.assign({ onClick: (() => __VLS_ctx.emit('click')) }, { class: ([__VLS_ctx.btnType, __VLS_ctx.widthType, 'group']) }), { class: "commonButton" }), { disabled: (__VLS_ctx.disabled) }));
if (__VLS_ctx.iconPos === 'left') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "icon-wrapper flex w-[24px] h-[24px]" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "material-symbols-outlined w-full h-full group-hover:animate-bounceIcon" }, { style: ({ color: __VLS_ctx.iconColor }) }));
    (__VLS_ctx.iconName);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
(__VLS_ctx.text);
if (__VLS_ctx.iconPos === 'right') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "icon-wrapper flex w-[24px] h-[24px]" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "material-symbols-outlined w-full h-full group-hover:animate-bounceIcon" }, { style: ({ color: __VLS_ctx.iconColor }) }));
    (__VLS_ctx.iconName);
}
/** @type {__VLS_StyleScopedClasses['group']} */ ;
/** @type {__VLS_StyleScopedClasses['commonButton']} */ ;
/** @type {__VLS_StyleScopedClasses['icon-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[24px]']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[24px]']} */ ;
/** @type {__VLS_StyleScopedClasses['material-symbols-outlined']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:animate-bounceIcon']} */ ;
/** @type {__VLS_StyleScopedClasses['icon-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[24px]']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[24px]']} */ ;
/** @type {__VLS_StyleScopedClasses['material-symbols-outlined']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:animate-bounceIcon']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            emit: emit,
            iconColor: iconColor,
        };
    },
    __typeEmits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
