import React from 'react'
// ─── DESIGN TOKENS ───────────────────────────────────────────────────────────
const tokens = {
    cream: "#f5f0e8",
    warmWhite: "#faf8f4",
    linen: "#ede6d9",
    sand: "#c9b99a",
    earth: "#4a3d2e",
    charcoal: "#1e1a14",
    accent: "#b07d4a",
    accentLight: "#d4a96a",
    stone: "#5a5045",
};


function Top_Section() {
    return (
        <header style={{
            position: "relative",
            background: tokens.charcoal,
            padding: "clamp(80px,12vw,140px) clamp(24px,6vw,80px)",
            textAlign: "center",
            overflow: "hidden",
        }}>
            <div style={{
                pointerEvents: "none",
                position: "absolute", inset: 0,
                background: `radial-gradient(ellipse 80% 60% at 50% 120%, rgba(176,125,74,0.18) 0%, transparent 70%),repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(255,255,255,0.025) 60px),repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(255,255,255,0.025) 60px)`,
            }} />
            <div style={{ position: "relative", zIndex: 1, maxWidth: 840, margin: "0 auto" }}>
                <p style={{ fontFamily: "sans-serif", fontSize: 11, fontWeight: 400, letterSpacing: "0.3em", textTransform: "uppercase", color: tokens.accentLight, marginBottom: 28 }}>
                    North Expression · Heritage Craft
                </p>
                <h1 style={{ fontFamily: "Georgia, serif", fontWeight: 100, fontSize: "clamp(20px,6vw,70px)", color: tokens.cream, lineHeight: 1.05, letterSpacing: "-0.01em", marginBottom: 24 }}>
                   North Expression Made Rugs for  <em style={{ fontStyle: "italic", color: tokens.accentLight }}>Professional Projects</em>
                </h1>
                <p style={{ fontFamily: "sans-serif", fontWeight: 300, fontSize: 15, color: tokens.sand, maxWidth: 460, margin: "0 auto", letterSpacing: "0.02em", lineHeight: 1.7 }}>
                    Four production methods — each chosen for different interiors, budgets and performance needs.
                </p>
                <div style={{ width: 1, height: 56, background: `linear-gradient(to bottom, ${tokens.accent}, transparent)`, margin: "36px auto 0" }} />
            </div>
        </header>
    )
}

export default Top_Section
