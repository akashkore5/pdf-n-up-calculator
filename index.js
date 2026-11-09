/**
 * @akashkore5/pdf-n-up-calculator
 * Helper calculations for N-up PDF sheet imposition (2-in-1, 4-in-1, 9-in-1).
 * Powered by https://www.editpdfkit.com/tools/pdf-n-up
 */

/**
 * Calculates row and column dimensions for grid imposition
 * @param {number} nUpCount - 2, 4, 9, 16
 * @param {number} sheetWidth - Sheet width in points (default A4: 595.28)
 * @param {number} sheetHeight - Sheet height in points (default A4: 841.89)
 * @returns {Object} Imposition layout metrics
 */
function calculateNUpGrid(nUpCount = 2, sheetWidth = 595.28, sheetHeight = 841.89) {
  let cols = 1;
  let rows = 2;

  if (nUpCount === 4) {
    cols = 2;
    rows = 2;
  } else if (nUpCount === 9) {
    cols = 3;
    rows = 3;
  } else if (nUpCount === 16) {
    cols = 4;
    rows = 4;
  }

  const slotWidth = sheetWidth / cols;
  const slotHeight = sheetHeight / rows;

  return {
    cols,
    rows,
    slotWidth,
    slotHeight,
    totalSlots: cols * rows
  };
}

module.exports = {
  calculateNUpGrid
};
