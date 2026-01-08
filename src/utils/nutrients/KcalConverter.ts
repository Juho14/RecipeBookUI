const KJ_PER_KCAL = 4.184

export function kcalToKj(kcal: number) {
  return Math.round(kcal * KJ_PER_KCAL)
}
