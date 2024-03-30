export type SelectCelebrationNavigationProps = {
  navigate(screen: string): void;
  goBack(): void;
};

export type SelectCelebrationRouteProps = {
  yearID: string;
  cycleID: string;
};
