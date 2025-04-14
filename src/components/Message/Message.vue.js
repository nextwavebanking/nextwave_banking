import { ref } from 'vue';
import Input from '../input/Input.vue';
import TelInput from '../input/TelInput.vue';
import VInputField from '../input/VInputField.vue';
const firstName = ref('');
const secondName = ref('');
const businessEmail = ref('');
const phone = ref();
const companyName = ref('');
const help = ref('');
const isCheck = ref(true);
const isValidPhoneNumber = ref(false);
const handleMessageSendClick = () => {
    if (!phone.value || phone.value === '' || phone.value === ' ') {
        isValidPhoneNumber.value = !isValidPhoneNumber.value;
        return;
    }
    const data = {
        firstName: firstName.value,
        secondName: secondName.value,
        businessEmail: businessEmail.value,
        phone: phone.value,
        companyName: companyName.value,
        help: help.value,
        isCheck: isCheck.value,
    };
    console.log(data);
    sendMessage(data);
    clearFields();
};
const sendMessage = (data) => {
    var _a;
    const whatSupsAppNumber = '971563044605';
    let whatsappUrl = `https://wa.me/${whatSupsAppNumber}?text=Customer%20Name:${data.firstName}%20${data.secondName}%0ABusiness%20Email:${data.businessEmail}%0APhone:${data.phone}%0ACompanyName:${data.companyName}%0AHelp:${data.help}%0AIsCheck:${data.isCheck}`;
    (_a = window.open(whatsappUrl, '_blank')) === null || _a === void 0 ? void 0 : _a.focus();
};
const clearFields = () => {
    firstName.value = '';
    secondName.value = '';
    businessEmail.value = '';
    phone.value = '';
    companyName.value = '';
    help.value = '';
    isCheck.value = true;
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['message']} */ ;
// CSS variable injection 
// CSS variable injection end 
const __VLS_0 = {}.VForm;
/** @type {[typeof __VLS_components.VForm, typeof __VLS_components.vForm, typeof __VLS_components.VForm, typeof __VLS_components.vForm, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(Object.assign({ 'onSubmit': {} }, { class: "message flex flex-col h-fit w-full max-w-[485px]" })));
const __VLS_2 = __VLS_1(Object.assign({ 'onSubmit': {} }, { class: "message flex flex-col h-fit w-full max-w-[485px]" }), ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_4;
let __VLS_5;
let __VLS_6;
const __VLS_7 = {
    onSubmit: (__VLS_ctx.handleMessageSendClick)
};
var __VLS_8 = {};
__VLS_3.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "message-header" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "body-lg-medium" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "flex flex-col gap-[8px]" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "name flex justify-between w-full gap-[14px]" }));
/** @type {[typeof VInputField, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(VInputField, new VInputField({
    label: ('First Name'),
    modelValue: (__VLS_ctx.firstName),
    type: ('text'),
}));
const __VLS_10 = __VLS_9({
    label: ('First Name'),
    modelValue: (__VLS_ctx.firstName),
    type: ('text'),
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
/** @type {[typeof VInputField, ]} */ ;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent(VInputField, new VInputField({
    label: ('Second Name'),
    modelValue: (__VLS_ctx.secondName),
}));
const __VLS_13 = __VLS_12({
    label: ('Second Name'),
    modelValue: (__VLS_ctx.secondName),
}, ...__VLS_functionalComponentArgsRest(__VLS_12));
/** @type {[typeof VInputField, ]} */ ;
// @ts-ignore
const __VLS_15 = __VLS_asFunctionalComponent(VInputField, new VInputField({
    label: ('Business Email'),
    modelValue: (__VLS_ctx.businessEmail),
    type: ('email'),
}));
const __VLS_16 = __VLS_15({
    label: ('Business Email'),
    modelValue: (__VLS_ctx.businessEmail),
    type: ('email'),
}, ...__VLS_functionalComponentArgsRest(__VLS_15));
/** @type {[typeof TelInput, ]} */ ;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent(TelInput, new TelInput({
    label: ('Phone Number'),
    modelValue: (__VLS_ctx.phone),
    autoFocus: (__VLS_ctx.isValidPhoneNumber),
}));
const __VLS_19 = __VLS_18({
    label: ('Phone Number'),
    modelValue: (__VLS_ctx.phone),
    autoFocus: (__VLS_ctx.isValidPhoneNumber),
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
/** @type {[typeof VInputField, ]} */ ;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(VInputField, new VInputField({
    label: ('Company Name'),
    modelValue: (__VLS_ctx.companyName),
}));
const __VLS_22 = __VLS_21({
    label: ('Company Name'),
    modelValue: (__VLS_ctx.companyName),
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
/** @type {[typeof Input, ]} */ ;
// @ts-ignore
const __VLS_24 = __VLS_asFunctionalComponent(Input, new Input({
    label: ('How can we help? (optional)'),
    modelValue: (__VLS_ctx.help),
    isTextarea: (true),
}));
const __VLS_25 = __VLS_24({
    label: ('How can we help? (optional)'),
    modelValue: (__VLS_ctx.help),
    isTextarea: (true),
}, ...__VLS_functionalComponentArgsRest(__VLS_24));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "check gap-[10px] flex" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    type: "checkbox",
});
(__VLS_ctx.isCheck);
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "message-action" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(Object.assign({ class: "messageBtn" }));
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['message']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['h-fit']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-[485px]']} */ ;
/** @type {__VLS_StyleScopedClasses['message-header']} */ ;
/** @type {__VLS_StyleScopedClasses['body-lg-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-[8px]']} */ ;
/** @type {__VLS_StyleScopedClasses['name']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-[14px]']} */ ;
/** @type {__VLS_StyleScopedClasses['check']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-[10px]']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['message-action']} */ ;
/** @type {__VLS_StyleScopedClasses['messageBtn']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Input: Input,
            TelInput: TelInput,
            VInputField: VInputField,
            firstName: firstName,
            secondName: secondName,
            businessEmail: businessEmail,
            phone: phone,
            companyName: companyName,
            help: help,
            isCheck: isCheck,
            isValidPhoneNumber: isValidPhoneNumber,
            handleMessageSendClick: handleMessageSendClick,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
