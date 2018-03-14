import React from "react";
import { FormattedMessage } from "react-intl";
import { StyledListing } from "./Listing.styled";

const Listing = () => (
  <FormattedMessage id="listing.mainText">
    {value => <StyledListing>{value}</StyledListing>}
  </FormattedMessage>
);

export { Listing };
