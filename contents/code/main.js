// Copyright (C) 2018 Konstantinos Smanis <konstantinos.smanis@gmail.com>
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 2 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program. If not, see <https://www.gnu.org/licenses/>.

registerShortcut("MoveWindowToCenter", "Move Window to Center", "Meta+C", function () {
    var client = workspace.activeClient;
    if (client.moveable) {
        var maxArea = workspace.clientArea(KWin.MaximizeArea, client);
        const width = client.width > 1622 ? client.width : 1622
        const height = client.height > 853 ? client.height : 853
        client.geometry = {
            x: maxArea.x + (maxArea.width - width) / 2,
            y: maxArea.y + (maxArea.height - height) / 2,
            width: width,
            height: height
        };
    }
});
