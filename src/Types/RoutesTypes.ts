import { RouterConstants } from "../Constants/RouterConstants";

export type RouterConstantsType = typeof RouterConstants[keyof typeof RouterConstants];

export type NavigationStackParams = {
    [RouterConstants.SplashScreen]: undefined;
};