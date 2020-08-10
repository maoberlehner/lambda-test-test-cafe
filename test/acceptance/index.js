import { Selector } from 'testcafe';

fixture(`Index`).page(`http://localhost:1337/`);

test(`It should increase the count by 1 when clicking "+".`, async (t) => {
  const count = Selector(`[data-qa="count"]`);
  const increaseButton = Selector(`[data-qa="increase button"]`);

  await t
    .click(increaseButton)
    .expect(count.innerText)
    .eql(`1`);
});

test(`It should decrease the count by 1 when clicking "-".`, async (t) => {
  const count = Selector(`[data-qa="count"]`);
  const increaseButton = Selector(`[data-qa="decrease button"]`);

  await t
    .click(increaseButton)
    .expect(count.innerText)
    .eql(`-1`);
});
