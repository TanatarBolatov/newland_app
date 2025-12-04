
import React from 'react';
import { GridBackgroundWrapper } from '../components/shared/GridBackgroundWrapper';
import { KeyFeaturesSection } from '../sections/KeyFeaturesSection';
import { PricingSection } from '../sections/PricingSection';

export const BusinessView = () => {
  return (
    <>
      <div style={{ paddingTop: "100px" }}> 
        <GridBackgroundWrapper>
          <KeyFeaturesSection />
          <PricingSection id="business-pricing" />
        </GridBackgroundWrapper>
      </div>
    </>
  );
};
