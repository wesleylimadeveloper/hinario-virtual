export type Data = {
  yearID: string;
  cycleID: string;
  celebrationID: string;
};

export type SelectCelebrationNavigationProps = {
  navigate(screen: string, data?: Data): void;
  goBack(): void;
};

export type SelectCelebrationRouteProps = {
  yearID: string;
  cycleID: string;
};
