<template>
  <div>
    <div id="header">
      <h1 class="title is-4">ประวัติ</h1>
    </div>
    

    <div class="box">
      <article class="media-is-center">
        <img alt="Vue logo" id="image" src="../assets/profile.jpeg" width="200" />
      </article>
      <br>
      <article class="media">
        <div class="media-left">
          <div class="content">
            <p>
              <strong>ชื่อ-สกุล</strong>
              <br />
              <strong>วันเกิด</strong>
              <br />
              <strong>อายุ</strong>
              <br />
              <strong>สถานภาพ</strong>
              <br />
              <strong>เกณฑ์ทหาร</strong>
              <br />
              <strong>สัญชาติ</strong>
              <br />
              <strong>อาชีพที่อยากเป็น</strong>
              <br />
              <strong>เป้าหมายในชีวิต</strong>
            </p>
          </div>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <small>นายอตรีลักษณ์ ศรีเพ็ง</small>
              <br />
              <small>25 มิถุนายน 2537</small>
              <br />
              <small>25 ปี</small>
              <br />
              <small>โสด</small>
              <br />
              <small>ได้รับการยกเว้น</small>
              <br />
              <small>ไทย</small>
              <br />
              <small>Developer</small>
              <br />ผมจะพัฒนาความรู้ ความสามารถที่มีอยู่ให้ก้าวหน้าตลอดเวลา เพื่อพัฒนาเทคโนโลยีที่ตอบสนองต่อการใช้งานของคนทุกระดับ และพร้อมปรับตัวเข้ากับเทคโนโลยีใหม่ ๆ รวมไปถึงงานที่ท้าทายขององค์กร สิ่งเหล่านี้จะทำให้ผมประสบความสำเร็จและองค์กรก็จะประสบความสำเร็จตามที่ตั้งไว้
            </p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>
<style scoped lang="scss">
#header {
  margin-top: 50px;
}
#home {
  text-align: left;
}

#head {
  p {
    font-weight: bold;
  }
}

.box {
  margin: 20px;
}
</style>
