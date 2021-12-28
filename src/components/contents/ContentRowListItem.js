export const ContentRowListItem = () => {
  const $root = document.createElement("li");
  $root.className = "content";

  const random = Math.floor(Math.random() * 100);

  $root.innerHTML = `
    <li class="content">
        <img
            src="https://picsum.photos/142/96?random=${random}"
            draggable="false"
        />

        <div>
            <div class="title">
            <img
                src="https://static-page.kakao.com/static/common/icon_up.svg?51cfaf512283ca0e1eaca53414e35a3f"
                alt="업데이트"
            />
            <span>후궁계약</span>
            </div>

            <p class="description">후궁으로 입궁해 다오. 그게 내 의뢰다.</p>

            <div class="flex">
                <img
                    src="https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871"
                    alt="people"
                />
                <span>91.5만명</span>
                <div class="separator"></div>
                <span>무늬랑,NU</span>
            </div>
        </div>
    </li>
  `;

  return { $root };
};