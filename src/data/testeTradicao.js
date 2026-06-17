import { getSantoDoDia } from "./santos";
import { FIXED_DATES, MOVABLE_DATES_2026, getShabat } from "./multiCalendar";

export const getEspiritualidadeDoDia = (day, month, year=null) => {
  const eventos = [];

  // 1. Datas fixas
  FIXED_DATES.forEach(d => {
    if (d.day === day && d.month === month) eventos.push(d);
  });

  // 2. Datas móveis (se ano fornecido)
  if (year === 2026) {
    const dateStr = `${year}-${String(month).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
    MOVABLE_DATES_2026.forEach(d => {
      if (d.date === dateStr) eventos.push(d);
    });
  }

  // 3. Shabat (se data completa)
  if (year) {
    const shabat = getShabat(new Date(year, month-1, day));
    if (shabat && !eventos.some(e => e.tradicao === "Judaica")) {
      eventos.push(shabat);
    }
  }

  // 4. Santo do dia (fallback)
  if (eventos.length === 0) {
    const santo = getSantoDoDia(day, month);
    if (santo) {
      eventos.push({
        tradicao: "Católica",
        titulo: santo,
        desc: "Memória deste santo no calendário católico.",
        cor: "#1E40AF",
      });
    }
  }

  return eventos;
};

// ============================================================
// CORES POR TRADIÇÃO (para o app)
// ============================================================
export const TRADICAO_COLORS = {
  "Católica":   "#1E40AF",  // azul escuro
  "Evangélica": "#0891B2",  // ciano
  "Ortodoxa":   "#1E3A8A",  // azul royal
  "Judaica":    "#7C3AED",  // roxo
  "Islâmica":   "#059669",  // verde
  "Budista":    "#F59E0B",  // âmbar
  "Hindu":      "#DB2777",  // rosa
  "Espírita":   "#7C3AED",  // roxo
  "Umbanda":    "#92400E",  // marrom
  "Universal":  "#10B981",  // verde menta
};

export const TRADICAO_EMOJI = {
  "Católica":   "✝️",
  "Evangélica": "✟",
  "Ortodoxa":   "☦️",
  "Judaica":    "✡️",
  "Islâmica":   "☪️",
  "Budista":    "☸️",
  "Hindu":      "🕉️",
  "Espírita":   "🌟",
  "Umbanda":    "🌊",
  "Universal":  "🌍",
};

// ============================================================
// DATA: versiculos.js
// ============================================================
// ============================================================
// KOMPARAI — VERSÍCULOS E FRASES DO DIA
// Por tradição religiosa + fallback aleatório
// ============================================================

// 31 frases por tradição (uma por dia do mês)
