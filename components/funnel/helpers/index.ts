export type FunnelScreen =
  | "intro"
  | "experience"
  | "opportunities"
  | "chart"
  | "plans"
  | "features"
  | "goal"
  | "risk"
  | "insight"
  | "analyzing"
  | "signup"
  | "offer";

export const stepMappings: Record<number, FunnelScreen> = {
  1: "intro",
  2: "experience",
  3: "opportunities",
  4: "chart",
  5: "plans",
  6: "features",
  7: "goal",
  8: "risk",
  9: "insight",
  10: "analyzing",
  11: "signup",
  12: "offer",
};

export const getStepNumber = (screen: FunnelScreen): number => {
  const entry = Object.entries(stepMappings).find(([_, value]) => value === screen);
  return entry ? parseInt(entry[0]) : 1;
};

export const routes: Record<FunnelScreen, string> = {
  intro: "/",
  experience: "experience",
  opportunities: "opportunities",
  chart: "chart",
  plans: "plans",
  features: "features",
  goal: "goal",
  risk: "risk",
  insight: "insight",
  analyzing: "analyzing",
  signup: "signup",
  offer: "offer",
};
