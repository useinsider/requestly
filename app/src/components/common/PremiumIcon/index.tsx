import React from "react";
import { TooltipProps } from "antd";
import { ReactComponent as CrownIcon } from "assets/icons/crown.svg";
import { FeatureType, PaidFeatureNudgeViewedSource } from "modules/analytics/events/common/pricing";
import "./premiumIcon.css";

export const PremiumIcon: React.FC<
  TooltipProps & { onSeePlansClick?: () => void } & {
    featureType: FeatureType;
    source?: PaidFeatureNudgeViewedSource;
  }
> = (props) => {
  return (
    <span className="premium-icon">
      <CrownIcon />
    </span>
  );
};
