const props = defineProps();
const emit = defineEmits();
const handleClick = () => {
    emit('update:modelValue', !props.modelValue);
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['three-line-button']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
/** @type {__VLS_StyleScopedClasses['three-line-button']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
/** @type {__VLS_StyleScopedClasses['three-line-button']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(Object.assign(Object.assign({ onClick: (__VLS_ctx.handleClick) }, { class: "three-line-button w-[24px] h-[24px] flex flex-col relative justify-between px-[3px] py-[6px] overflow-hidden" }), { class: (__VLS_ctx.modelValue && 'active') }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "w-[100%] h-[2px] bg-black" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "w-[100%] h-[2px] bg-black" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "w-[100%] h-[2px] bg-black" }));
/** @type {__VLS_StyleScopedClasses['three-line-button']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[24px]']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[24px]']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['px-[3px]']} */ ;
/** @type {__VLS_StyleScopedClasses['py-[6px]']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[100%]']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[2px]']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-black']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[100%]']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[2px]']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-black']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[100%]']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[2px]']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-black']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            handleClick: handleClick,
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
