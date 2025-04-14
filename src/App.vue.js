import { ref } from 'vue';
import Footer from './components/Sections/Footer.vue';
import Header from './components/Sections/Header.vue';
import AboutUs from './components/Sections/AboutUs.vue';
import ContactUs from './components/Sections/ContactUs.vue';
import HeroSection from './components/Sections/HeroSection.vue';
import HowItWorks from './components/Sections/HowItWorks.vue';
import Service from './components/Sections/ourService.vue';
import WhyChooseUs from './components/Sections/WhyChooseUs.vue';
const headerRef = ref();
const heroRef = ref();
const AboutUsRef = ref();
const ServiceRef = ref();
const HowItWorksRef = ref();
const WhyChooseUsRef = ref();
const ContactUsRef = ref();
const FooterRef = ref();
const isClickedOutside = ref(false);
const handleOutsideClick = (event) => {
    if (!headerRef.value.$el.contains(event.target)) {
        isClickedOutside.value = !isClickedOutside.value;
    }
};
const handleScrollTo = (value) => {
    const sections = {
        AboutUsRef,
        ServiceRef,
        HowItWorksRef,
        WhyChooseUsRef,
        ContactUsRef,
        FooterRef,
        heroRef,
        headerRef,
    };
    if (value === 'top') {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
    else {
        sections[value].value.$el.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign(Object.assign({ onPointerdown: (__VLS_ctx.handleOutsideClick) }, { onWheel: (...[$event]) => {
        __VLS_ctx.isClickedOutside = !__VLS_ctx.isClickedOutside;
    } }), { class: "flex flex-col relative" }));
/** @type {[typeof Header, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(Header, new Header(Object.assign({ 'onScrollTo': {} }, { ref: "headerRef", isClickedOutside: (__VLS_ctx.isClickedOutside) })));
const __VLS_1 = __VLS_0(Object.assign({ 'onScrollTo': {} }, { ref: "headerRef", isClickedOutside: (__VLS_ctx.isClickedOutside) }), ...__VLS_functionalComponentArgsRest(__VLS_0));
let __VLS_3;
let __VLS_4;
let __VLS_5;
const __VLS_6 = {
    onScrollTo: (__VLS_ctx.handleScrollTo)
};
/** @type {typeof __VLS_ctx.headerRef} */ ;
var __VLS_7 = {};
var __VLS_2;
/** @type {[typeof HeroSection, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(HeroSection, new HeroSection(Object.assign({ 'onScrollTo': {} }, { ref: "heroRef" })));
const __VLS_10 = __VLS_9(Object.assign({ 'onScrollTo': {} }, { ref: "heroRef" }), ...__VLS_functionalComponentArgsRest(__VLS_9));
let __VLS_12;
let __VLS_13;
let __VLS_14;
const __VLS_15 = {
    onScrollTo: (__VLS_ctx.handleScrollTo)
};
/** @type {typeof __VLS_ctx.heroRef} */ ;
var __VLS_16 = {};
var __VLS_11;
/** @type {[typeof AboutUs, ]} */ ;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent(AboutUs, new AboutUs({
    ref: "AboutUsRef",
}));
const __VLS_19 = __VLS_18({
    ref: "AboutUsRef",
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
/** @type {typeof __VLS_ctx.AboutUsRef} */ ;
var __VLS_21 = {};
var __VLS_20;
/** @type {[typeof Service, ]} */ ;
// @ts-ignore
const __VLS_23 = __VLS_asFunctionalComponent(Service, new Service(Object.assign({ 'onScrollTo': {} }, { ref: "ServiceRef" })));
const __VLS_24 = __VLS_23(Object.assign({ 'onScrollTo': {} }, { ref: "ServiceRef" }), ...__VLS_functionalComponentArgsRest(__VLS_23));
let __VLS_26;
let __VLS_27;
let __VLS_28;
const __VLS_29 = {
    onScrollTo: (__VLS_ctx.handleScrollTo)
};
/** @type {typeof __VLS_ctx.ServiceRef} */ ;
var __VLS_30 = {};
var __VLS_25;
/** @type {[typeof HowItWorks, ]} */ ;
// @ts-ignore
const __VLS_32 = __VLS_asFunctionalComponent(HowItWorks, new HowItWorks(Object.assign({ 'onScrollTo': {} }, { ref: "HowItWorksRef" })));
const __VLS_33 = __VLS_32(Object.assign({ 'onScrollTo': {} }, { ref: "HowItWorksRef" }), ...__VLS_functionalComponentArgsRest(__VLS_32));
let __VLS_35;
let __VLS_36;
let __VLS_37;
const __VLS_38 = {
    onScrollTo: (__VLS_ctx.handleScrollTo)
};
/** @type {typeof __VLS_ctx.HowItWorksRef} */ ;
var __VLS_39 = {};
var __VLS_34;
/** @type {[typeof WhyChooseUs, ]} */ ;
// @ts-ignore
const __VLS_41 = __VLS_asFunctionalComponent(WhyChooseUs, new WhyChooseUs(Object.assign({ 'onScrollTo': {} }, { ref: "WhyChooseUsRef" })));
const __VLS_42 = __VLS_41(Object.assign({ 'onScrollTo': {} }, { ref: "WhyChooseUsRef" }), ...__VLS_functionalComponentArgsRest(__VLS_41));
let __VLS_44;
let __VLS_45;
let __VLS_46;
const __VLS_47 = {
    onScrollTo: (__VLS_ctx.handleScrollTo)
};
/** @type {typeof __VLS_ctx.WhyChooseUsRef} */ ;
var __VLS_48 = {};
var __VLS_43;
/** @type {[typeof ContactUs, ]} */ ;
// @ts-ignore
const __VLS_50 = __VLS_asFunctionalComponent(ContactUs, new ContactUs({
    ref: "ContactUsRef",
}));
const __VLS_51 = __VLS_50({
    ref: "ContactUsRef",
}, ...__VLS_functionalComponentArgsRest(__VLS_50));
/** @type {typeof __VLS_ctx.ContactUsRef} */ ;
var __VLS_53 = {};
var __VLS_52;
/** @type {[typeof Footer, ]} */ ;
// @ts-ignore
const __VLS_55 = __VLS_asFunctionalComponent(Footer, new Footer(Object.assign({ 'onScrollTo': {} }, { ref: "FooterRef" })));
const __VLS_56 = __VLS_55(Object.assign({ 'onScrollTo': {} }, { ref: "FooterRef" }), ...__VLS_functionalComponentArgsRest(__VLS_55));
let __VLS_58;
let __VLS_59;
let __VLS_60;
const __VLS_61 = {
    onScrollTo: (__VLS_ctx.handleScrollTo)
};
/** @type {typeof __VLS_ctx.FooterRef} */ ;
var __VLS_62 = {};
var __VLS_57;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
// @ts-ignore
var __VLS_8 = __VLS_7, __VLS_17 = __VLS_16, __VLS_22 = __VLS_21, __VLS_31 = __VLS_30, __VLS_40 = __VLS_39, __VLS_49 = __VLS_48, __VLS_54 = __VLS_53, __VLS_63 = __VLS_62;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Footer: Footer,
            Header: Header,
            AboutUs: AboutUs,
            ContactUs: ContactUs,
            HeroSection: HeroSection,
            HowItWorks: HowItWorks,
            Service: Service,
            WhyChooseUs: WhyChooseUs,
            headerRef: headerRef,
            heroRef: heroRef,
            AboutUsRef: AboutUsRef,
            ServiceRef: ServiceRef,
            HowItWorksRef: HowItWorksRef,
            WhyChooseUsRef: WhyChooseUsRef,
            ContactUsRef: ContactUsRef,
            FooterRef: FooterRef,
            isClickedOutside: isClickedOutside,
            handleOutsideClick: handleOutsideClick,
            handleScrollTo: handleScrollTo,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
