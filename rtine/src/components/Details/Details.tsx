import React, { FC } from 'react';
import { DetailsWrapper } from './Details.styled';

interface DetailsProps {}

const Details: FC<DetailsProps> = () => (
 <DetailsWrapper data-testid="Details">
    Details Component
 </DetailsWrapper>
);

export default Details;
