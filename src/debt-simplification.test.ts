import { computeBalances, Person, Debt } from "./debt-simplification";

describe("debt simplification test", () => {
  const people: Array<Person> = ["Grace", "Ivan", "Judy", "Luke", "Mallory"];

  const debts: Array<Debt> = [
    ["Grace", "Ivan", 5],
    ["Grace", "Judy", 3],
    ["Ivan", "Grace", 2],
    ["Ivan", "Mallory", 5],
    ["Judy", "Grace", 10],
    ["Judy", "Luke", 4],
    ["Judy", "Mallory", 6],
    ["Judy", "Mallory", 2],
    ["Luke", "Ivan", 4],
    ["Mallory", "Grace", 15],
    ["Mallory", "Luke", 6],
    ["Mallory", "Judy", 11],
  ];

  describe("computeBalances", () => {
    it("should return proper object", () => {
      expect(computeBalances(debts)).toEqual({
        Grace: 19,
        Ivan: 2,
        Judy: -8,
        Luke: 6,
        Mallory: -19,
      });
    });
  });
});
