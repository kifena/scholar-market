import Types "types/common";
import Map "mo:core/Map";
import WaitlistLib "lib/waitlist";
import WaitlistApi "mixins/waitlist-api";

actor {
  let waitlistState : WaitlistLib.State = Map.empty<Text, Types.WaitlistEntry>();
  include WaitlistApi(waitlistState);
};
