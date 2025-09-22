const { add } = require("./index");

if (add(2, 3) !== 5) {
  console.error("❌ Test failed: 2 + 3 should equal 5");
  process.exit(1);
} else {
  console.log("✅ Test passed: 2 + 3 = 5");
}

