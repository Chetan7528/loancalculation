import React from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import {
    Home,
    User,
    Car,
    GraduationCap,
    Building2,
    CreditCard,
    FileText,
    Lightbulb,
    ChevronRight,
} from "lucide-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const COLORS = {
    primary: "#2E7D32",
    light: "#E8F5E9",
    bg: "#F7F9F8",
    text: "#222",
    sub: "#777",
    white: "#FFF",
};

export default function HomeScreen() {

    const insets = useSafeAreaInsets()

    const LoanCard = ({ title, subtitle, icon: Icon, bg, color }) => (
        <TouchableOpacity style={styles.loanCard}>
            <View style={styles.loanCardInner}>
                <View style={[styles.iconBox, { backgroundColor: bg }]}>
                    <Icon size={26} color={color} strokeWidth={2} />
                </View>
                <Text style={styles.loanTitle}>{title}</Text>
                <Text style={styles.loanSub}>{subtitle}</Text>
            </View>
        </TouchableOpacity>
    );

    const ResourceCard = ({ title, subtitle, icon: Icon, onPress }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.85}
                onPress={onPress}
                style={styles.resourceWrapper}
            >
                <View style={styles.resourceCard}>
                    <View style={styles.resourceLeft}>
                        <View style={styles.resourceIconBox}>
                            <Icon size={22} color="#2E7D32" strokeWidth={2} />
                        </View>

                        <View style={styles.resourceText}>
                            <Text style={styles.resourceTitle}>{title}</Text>
                            <Text style={styles.resourceSub}>{subtitle}</Text>
                        </View>
                    </View>

                    <ChevronRight size={20} color="#9E9E9E" />
                </View>
            </TouchableOpacity>
        );
    };


    return (
        <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom + 40 }]}>
            <View style={styles.subContainer}>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>
                        Loan EMI Calculator – Finance
                    </Text>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>
                    {/* Welcome Card */}
                    <View style={styles.welcomeCard}>
                        <Text style={styles.welcomeTitle}>
                            Welcome to Loan EMI Calculator – Finance
                        </Text>
                        <Text style={styles.welcomeSub}>
                            Your complete guide to understanding loans
                        </Text>
                    </View>

                    {/* Types of Loans */}
                    <Text style={styles.sectionTitle}>Types of Loans</Text>

                    <View style={styles.grid}>
                        <LoanCard
                            title="Personal Loan"
                            subtitle="Quick unsecured loans"
                            icon={User}
                            bg="#F3E5F5"
                            color="#8E24AA"
                        />
                        <LoanCard
                            title="Home Loan"
                            subtitle="Buy your dream home"
                            icon={Home}
                            bg="#E8F5E9"
                            color="#2E7D32"
                        />
                        <LoanCard
                            title="Car Loan"
                            subtitle="Finance your vehicle"
                            icon={Car}
                            bg="#FDECEA"
                            color="#D32F2F"
                        />
                        <LoanCard
                            title="Education Loan"
                            subtitle="Invest in education"
                            icon={GraduationCap}
                            bg="#E3F2FD"
                            color="#1565C0"
                        />
                        <LoanCard
                            title="Business Loan"
                            subtitle="Grow your business"
                            icon={Building2}
                            bg="#E0F2F1"
                            color="#00695C"
                        />
                        <LoanCard
                            title="Credit Card"
                            subtitle="Flexible credit option"
                            icon={CreditCard}
                            bg="#FFF8E1"
                            color="#F9A825"
                        />
                    </View>

                    {/* Helpful Resources */}
                    <Text style={styles.sectionTitle}>Helpful Resources</Text>

                    <ResourceCard
                        title="Documents Required"
                        subtitle="Complete list of required documents"
                        icon={FileText}
                    />
                    <ResourceCard
                        title="Tips & Advice"
                        subtitle="Best practices for loan applications"
                        icon={Lightbulb}
                    />
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
    },
    subContainer: { flex: 1, backgroundColor: COLORS.white },
    header: {
        backgroundColor: COLORS.primary,
        padding: 16,
    },
    headerTitle: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
        textAlign: "center",
    },

    welcomeCard: {
        backgroundColor: COLORS.primary,
        margin: 16,
        padding: 20,
        borderRadius: 18,

        shadowColor: "#000",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.15,
        shadowRadius: 10,

        elevation: 5,
    },
    welcomeTitle: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 6,
    },
    welcomeSub: {
        color: "#C8E6C9",
    },

    sectionTitle: {
        fontSize: 18,
        fontWeight: "700",
        marginHorizontal: 16,
        marginTop: 22,
        marginBottom: 12,
    },

    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        paddingHorizontal: 12,
    },

    loanCard: {
        width: "50%",
        padding: 8,

    },
    loanCardInner: {
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 14,
        margin: 6,
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        // iOS shadow
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 8,

        // Android shadow
        elevation: 4,
    },
    loanTitle: {
        fontWeight: "600",
        marginTop: 10,
    },
    loanSub: {
        fontSize: 12,
        color: COLORS.sub,
    },

    iconBox: {
        width: 54,
        height: 54,
        borderRadius: 14,
        justifyContent: "center",
        alignItems: "center",
    },

    resourceWrapper: {
        marginHorizontal: 16,
        marginBottom: 14,
    },

    resourceCard: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 18,

        // iOS
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.06,
        shadowRadius: 8,

        // Android
        elevation: 3,
    },

    resourceLeft: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
    },

    resourceIconBox: {
        width: 42,
        height: 42,
        borderRadius: 12,
        backgroundColor: "#E8F5E9",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 14,
    },

    resourceText: {
        flex: 1,
    },

    resourceTitle: {
        fontSize: 15,
        fontWeight: "600",
        color: "#212121",
    },

    resourceSub: {
        fontSize: 12.5,
        color: "#757575",
        marginTop: 2,
    },

    arrow: {
        fontSize: 26,
        color: "#999",
    },
});

