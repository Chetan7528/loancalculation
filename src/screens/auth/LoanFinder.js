import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
} from "react-native";
import Slider from "@react-native-community/slider";
import {
    ArrowLeft,
    User,
    Home,
    Car,
    GraduationCap,
    Briefcase,
    UserCog,
    Store,
} from "lucide-react-native";
import { register } from "react-native/types_generated/Libraries/Renderer/shims/ReactNativeViewConfigRegistry";
import { reset } from "../../utils/navigationRef";
import { useSafeAreaInsets } from "react-native-safe-area-context";


const TOTAL_STEPS = 7;

const COLORS = {
    primary: "#4CAF50",
    light: "#E8F5E9",
    text: "#333",
    gray: "#E0E0E0",
    white: "#FFF",
};

export default function LoanFinderScreen({ navigation }) {
    const [step, setStep] = useState(1);
    const insets = useSafeAreaInsets();

    const [form, setForm] = useState({
        purpose: "",
        loanAmount: 100000,
        income: 50000,
        employment: "",
        creditScore: "",
        existingLoans: [],
        urgency: "",
    });

    const progress = Math.round((step / TOTAL_STEPS) * 100);

    const next = () => step < TOTAL_STEPS && setStep(step + 1);
    const prev = () => step > 1 && setStep(step - 1);

    const OptionStep = ({ title, subtitle, options, selected, onSelect }) => (
        <>
            <CardTitle title={title} subtitle={subtitle} />

            {options.map((item) => {
                const IconComponent = item.icon;

                return (
                    <TouchableOpacity
                        key={item.label}
                        style={[
                            styles.option,
                            selected === item.label && styles.optionActive,
                        ]}
                        onPress={() => onSelect(item.label)}
                    >
                        <View style={styles.iconBox}>
                            <IconComponent
                                size={22}
                                color={COLORS.primary}
                                strokeWidth={2}
                            />
                        </View>
                        <Text style={styles.optionText}>{item.label}</Text>
                    </TouchableOpacity>
                );
            })}
        </>
    );

    const OptionCard = ({ label, icon: Icon, selected, onPress, checkbox }) => (
        <TouchableOpacity
            style={[
                styles.option,
                selected && styles.optionActive,
            ]}
            onPress={onPress}
        >
            <View style={styles.iconBox}>
                <Icon size={22} color={COLORS.primary} strokeWidth={2} />
            </View>

            <Text style={styles.optionText}>{label}</Text>

            {checkbox && (
                <View style={[
                    styles.checkBox,
                    selected && styles.checkBoxActive,
                ]}>
                    {selected && <Text style={styles.checkMark}>✓</Text>}
                </View>
            )}
        </TouchableOpacity>
    );



    const SliderStep = ({ title, label, value, min, max, step, onChange }) => (
        <>
            <CardTitle title={title} />
            <View style={styles.amountCard}>
                <Text style={styles.amountLabel}>{label}</Text>
                <Text style={styles.amountValue}>₹{value}</Text>
            </View>

            <Slider
                minimumValue={min}
                maximumValue={max}
                step={step}
                value={value}
                onValueChange={onChange}
                minimumTrackTintColor={COLORS.primary}
                maximumTrackTintColor="#ccc"
                thumbTintColor={COLORS.primary}
            />

            <View style={styles.range}>
                <Text>₹{min}</Text>
                <Text>₹{max}</Text>
            </View>
        </>
    );

    const CardTitle = ({ title, subtitle }) => (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{title}</Text>
            {subtitle && <Text style={styles.cardSub}>{subtitle}</Text>}
        </View>
    );


    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <View style={styles.subContainer}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <ArrowLeft size={24} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Loan Finder</Text>
                    <View style={{ width: 24 }} />
                </View>

                {/* Progress */}
                <View style={styles.progressBox}>
                    <Text style={styles.stepText}>Step {step} of {TOTAL_STEPS}</Text>
                    <Text style={styles.percent}>{progress}% Complete</Text>
                </View>

                <View style={styles.progressBar}>
                    <View style={[styles.progressFill, { width: `${progress}%` }]} />
                </View>

                {/* Content */}
                <View style={styles.content}>
                    {step === 1 && (
                        <OptionStep
                            title="What do you need the loan for?"
                            subtitle="Select the primary purpose of your loan"
                            options={[
                                { label: "Personal Expenses", icon: User },
                                { label: "Home Purchase", icon: Home },
                                { label: "Vehicle Purchase", icon: Car },
                                { label: "Education", icon: GraduationCap },
                            ]}
                            selected={form.purpose}
                            onSelect={(v) => setForm({ ...form, purpose: v })}
                        />
                    )}

                    {step === 2 && (
                        <SliderStep
                            title="How much loan do you need?"
                            label="Loan Amount"
                            value={form.loanAmount}
                            min={10000}
                            max={10000000}
                            step={10000}
                            onChange={(v) => setForm({ ...form, loanAmount: v })}
                        />
                    )}

                    {step === 3 && (
                        <SliderStep
                            title="What is your monthly income?"
                            label="Monthly Income"
                            value={form.income}
                            min={10000}
                            max={500000}
                            step={5000}
                            onChange={(v) => setForm({ ...form, income: v })}
                        />
                    )}

                    {step === 4 && (
                        <OptionStep
                            title="What is your employment status?"
                            subtitle="Select your current employment type"
                            options={[
                                { label: "Salaried", icon: Briefcase },
                                { label: "Self-Employed", icon: UserCog },
                                { label: "Business Owner", icon: Store },
                                { label: "Professional", icon: UserCog },
                            ]}
                            selected={form.employment}
                            onSelect={(v) => setForm({ ...form, employment: v })}
                        />
                    )}

                    {/* Steps 5–7 placeholders */}
                    {step === 5 && (
                        <>
                            <CardTitle
                                title="What is your credit score range?"
                                subtitle="Select the range that applies to you"
                            />

                            {[
                                "Excellent (750+)",
                                "Good (700–749)",
                                "Fair (650–699)",
                                "Poor (Below 650)",
                            ].map((item) => (
                                <OptionCard
                                    key={item}
                                    label={item}
                                    icon={User}
                                    selected={form.creditScore === item}
                                    onPress={() =>
                                        setForm({ ...form, creditScore: item })
                                    }
                                    checkbox
                                />
                            ))}
                        </>
                    )}

                    {step === 6 && (
                        <>
                            <CardTitle
                                title="Do you have any existing loans?"
                                subtitle="Select all that apply"
                            />

                            {[
                                { label: "Personal Loan", icon: User },
                                { label: "Home Loan", icon: Home },
                                { label: "Car Loan", icon: Car },
                                { label: "Credit Card", icon: User },
                            ].map((item) => {
                                const selected = form.existingLoans.includes(item.label);

                                return (
                                    <OptionCard
                                        key={item.label}
                                        label={item.label}
                                        icon={item.icon}
                                        selected={selected}
                                        checkbox
                                        onPress={() => {
                                            setForm({
                                                ...form,
                                                existingLoans: selected
                                                    ? form.existingLoans.filter(l => l !== item.label)
                                                    : [...form.existingLoans, item.label],
                                            });
                                        }}
                                    />
                                );
                            })}
                        </>
                    )}

                    {step === 7 && (
                        <>
                            <CardTitle
                                title="How urgently do you need the loan?"
                                subtitle="Select the timeframe"
                            />

                            {[
                                "Immediately (1–3 days)",
                                "Within a week",
                                "Within a month",
                                "Flexible",
                            ].map((item) => (
                                <OptionCard
                                    key={item}
                                    label={item}
                                    icon={User}
                                    selected={form.urgency === item}
                                    onPress={() =>
                                        setForm({ ...form, urgency: item })
                                    }
                                    checkbox
                                />
                            ))}
                        </>
                    )}



                </View>

                {/* Footer Buttons */}
                <View style={styles.footer}>
                    <TouchableOpacity
                        style={styles.prevBtn}
                        onPress={prev}
                        disabled={step === 1}
                    >
                        <Text style={styles.prevText}>Previous</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.nextBtn,
                            step === TOTAL_STEPS && { backgroundColor: "#2E7D32" },
                        ]}
                        onPress={step === TOTAL_STEPS ? () => reset('MainTab') : next}
                    >
                        <Text style={styles.nextText}>
                            {step === TOTAL_STEPS ? "Finish" : "Next"}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: COLORS.primary },
    subContainer: { flex: 1, backgroundColor: COLORS.white },
    header: {
        backgroundColor: COLORS.primary,
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    headerTitle: { color: "#fff", fontSize: 18, fontWeight: "600" },

    progressBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 16,
    },
    stepText: { fontWeight: "600" },
    percent: { color: COLORS.primary },

    progressBar: {
        height: 6,
        backgroundColor: COLORS.gray,
        marginHorizontal: 16,
        borderRadius: 6,
    },
    progressFill: {
        height: 6,
        backgroundColor: COLORS.primary,
        borderRadius: 6,
    },

    content: { padding: 16, flex: 1 },

    card: {
        backgroundColor: COLORS.white,
        padding: 20,
        borderRadius: 14,
        marginBottom: 16,
    },
    cardTitle: { fontSize: 20, fontWeight: "700", marginBottom: 6 },
    cardSub: { color: "#777" },

    option: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLORS.white,
        padding: 16,
        borderRadius: 14,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "#EEE",
    },
    optionActive: {
        borderColor: COLORS.primary,
        backgroundColor: COLORS.light,
    },
    iconBox: {
        backgroundColor: COLORS.light,
        padding: 10,
        borderRadius: 10,
        marginRight: 12,
    },
    optionText: { fontSize: 16 },

    amountCard: {
        backgroundColor: COLORS.primary,
        padding: 24,
        borderRadius: 16,
        alignItems: "center",
        marginBottom: 16,
    },
    amountLabel: { color: "#E8F5E9" },
    amountValue: {
        color: "#fff",
        fontSize: 32,
        fontWeight: "700",
    },

    range: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    footer: {
        flexDirection: "row",
        padding: 16,
        gap: 12,
    },
    prevBtn: {
        flex: 1,
        borderWidth: 1,
        borderColor: COLORS.primary,
        borderRadius: 30,
        padding: 14,
        alignItems: "center",
    },
    prevText: { color: COLORS.primary },

    nextBtn: {
        flex: 1,
        backgroundColor: COLORS.primary,
        borderRadius: 30,
        padding: 14,
        alignItems: "center",
    },
    nextText: { color: "#fff", fontWeight: "600" },

    placeholder: {
        textAlign: "center",
        marginTop: 40,
        color: "#777",
    },

    checkBox: {
        width: 22,
        height: 22,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "#ccc",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "auto",
    },
    checkBoxActive: {
        backgroundColor: COLORS.primary,
        borderColor: COLORS.primary,
    },
    checkMark: {
        color: "#fff",
        fontWeight: "700",
    },

});

