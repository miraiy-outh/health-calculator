type BMFProps = {
  weight: number;
  height: number;
  age: number;
  sex: "male" | "female";
  activity: "none" | "light" | "medium" | "high" | "very high";
};

enum activityCoef {
  none = 1.2,
  light = 1.375,
  medium = 1.55,
  high = 1.725,
  "very high" = 1.9,
}

export const BMFCounter = ({
  weight,
  height,
  age,
  sex,
  activity,
}: BMFProps): number[] => {
  const isMale = sex === "male";
  const isChild = age <= 17;
  const isTeen = age > 10;
  const activityCoefValue = activityCoef[activity];

  const bmfMsg =
    (10 * weight + 6.25 * height - 5 * age + (isMale ? +5 : -161)) *
    activityCoefValue;

  let bmfMaleVoz =
    (66.473 + 13.7516 * weight + 5.0033 * height - 6.755 * age) *
    activityCoefValue;
  let bmfFemaleVoz =
    (665.0955 + 9.5634 * weight + 1.8496 * height - 4.6756 * age) *
    activityCoefValue;

  let bmfMaleSh = 17.5 * weight + 651;
  let bmfFemaleSh = 13.4 * weight + 692;

  if (isChild) {
    bmfMaleVoz =
      (88.362 + 13.397 * weight + 4.799 * height - 5.677 * age) *
      activityCoefValue;
    bmfFemaleVoz =
      (447.593 + 9.247 * weight + 3.098 * height - 4.33 * age) *
      activityCoefValue;
  }

  if (!isTeen) {
    bmfMaleSh = 22.7 * weight + 495;
    bmfFemaleSh = 22.5 * weight + 499;
  }

  const bmfVoz = isMale ? bmfMaleVoz : bmfFemaleVoz;
  const bmfSh = isMale ? bmfMaleSh : bmfFemaleSh;

  return [bmfMsg, bmfVoz, isChild ? bmfSh : 0];
};
