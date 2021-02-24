const formatVolumeIconPath = require("../assets/scripts/main");

describe("Test Icon Changes ", () => {
        outOfBound();
        inBound();
});

function inBound() {
        test("When 0", () => {
                expect(formatVolumeIconPath(0)).toMatch(
                        "./assets/media/icons/volume-level-0.svg"
                );
        });

        test("Between 65 and 34", () => {
                expect(formatVolumeIconPath(45)).toMatch(
                        "./assets/media/icons/volume-level-2.svg"
                );
        });
        test("Between 100 and 66 ", () => {
                expect(formatVolumeIconPath(75)).toMatch(
                        "./assets/media/icons/volume-level-3.svg"
                );
        });

        test("Between 33 and 1", () => {
                expect(formatVolumeIconPath(5)).toMatch(
                        "./assets/media/icons/volume-level-1.svg"
                );
        });
}

function outOfBound() {
        test("< 0 Values", () => {
                expect(formatVolumeIconPath(-69)).toMatch(
                        "./assets/media/icons/volume-level-0.svg"
                );
        });

        test("> 100 Values", () => {
                expect(formatVolumeIconPath(169)).toMatch(
                        "./assets/media/icons/volume-level-3.svg"
                );
        });
}