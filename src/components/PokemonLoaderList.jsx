import ContentLoader from 'react-content-loader';
import React from 'react';

export const PokemonLoaderList = () => {
   let cy = 22;
   let y = 15;

   return (
      <ContentLoader
         fontSize={40}
         speed={2}
         width={140}
         height={300}
         viewBox="0 0 140 300"
         backgroundColor="#f3f3f3"
         foregroundColor="#ecebeb"
         style={{ display: 'block' }}
      >
         {Array.from({ length: 10 }).map((_, index) => {
            const currentCy = index === 0 ? cy : cy;
            const currentY = index === 0 ? y : y;

            cy += 30;
            y += 30;

            return (
               <React.Fragment key={index}>
                  <circle cx="10" cy={currentCy} r="10" />
                  <rect x="25" y={currentY} rx="5" ry="5" width="220" height="15" />
               </React.Fragment>
            );
         })}
      </ContentLoader>
   );
};
