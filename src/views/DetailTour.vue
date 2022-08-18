<template>
  <div class="q-mx-auto row" style="width: 70%">
    <div class="header">
      <div class="row justify-between">
        <div class="col-6">
          <span>NDSGN802-088-280722VU-D</span>
          <p class="text-h5">
            Bay cùng Vietravel Airlines | Thỏa Thích vui chơi tại Vinwonder &
            Safari World - Nghỉ dưỡng resort 5 sao Radisson Blu Phú Quốc
          </p>
          <span class="rate">9.4</span>
          <span>
            <b>Tuyệt vời</b> :
            406 quan tâm
          </span>
          <span class="care-box">S2 126</span>
        </div>
        <div class="col-6 row justify-end">
          <div>
            <div style="font-size: 18px">
              Giá
              <span style="text-decoration: line-through"> 3,990,000₫ </span>
            </div>
            <div style="font-size: 18px; color: red; font-weight: 600">
              3,990,000₫
            </div>
          </div>
          <div class="column">
            <q-btn color="red" label="Đặt ngay" />
            <q-btn class="q-mt-md" outline color="black" label="Liên hệ tư vấn" />
          </div>
        </div>
      </div>
      <div class="image-list">
        <div class="row">
          <div class="col-6" style="padding: 0 10px 10px 0px">
            <img
              src="https://media.travel.com.vn/tour/tfd_220701025711_331665.jpg"
              style="width: 100%; height: 535px; border-radius: 10px"
            />
          </div>
          <div class="col-6 column">
            <div>
              <img
                src="https://media.travel.com.vn/tour/tfd_220701025711_331665.jpg"
                style="
                  width: 50%;
                  height: 235px;
                  padding: 0 5px 5px 0;
                  border-radius: 10px;
                "
              />
              <img
                src="https://media.travel.com.vn/tour/tfd_220701025711_331665.jpg"
                style="
                  width: 50%;
                  height: 235px;
                  padding: 0 0 5px 5px;
                  border-radius: 10px;
                "
              />
            </div>
            <div>
              <img
                src="https://media.travel.com.vn/tour/tfd_220701025711_331665.jpg"
                style="height: 294px; width: 100%; border-radius: 10px"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-5 row justify-between">
          <p>
            Khởi hành 28/07/2022 <br />

            Thời gian 3 ngày <br />

            Nơi khởi hành TP. Hồ Chí Minh <br />

            Số chỗ còn nhận 0 <br />
          </p>
          <div>
            <q-btn color="primary" outline label="Ngày khác" />
          </div>
        </div>
        <div class="col-7 row q-pl-xl">
          <div class="info-item col-3">
            <b>Thời gian</b>
            <p>3 ngày 2 đêm</p>
          </div>

          <div class="info-item col-3">
            <b>Phương tiện di chuyển</b>
            <p>Xe du lịch</p>
          </div>

          <div class="info-item col-3">
            <b>Ẩm thực</b>
            <p>Theo thực đơn</p>
          </div>

          <div class="info-item col-3">
            <b>Điểm đến tham quan</b>
            <p>4 địa điểm ngoài trời, 2 địa điểm trong nhà</p>
          </div>

          <div class="info-item col-3">
            <b>Khách sạn</b>
            <p style="line-height: 20px">
              Khách sạn 3 sao <br />
              Khách sạn 4 sao <br />
              Khách sạn 5 sao
            </p>
          </div>

          <div class="info-item col-3">
            <b>Thời gian lý tưởng</b>
            <p>Quanh năm</p>
          </div>

          <div class="info-item col-3">
            <b>Đối tượng thích hợp</b>
            <p>Gia đình nhiều thế hệ</p>
          </div>

          <div class="info-item col-3">
            <b>Ưu đãi</b>
            <p>Đã ưu đãi trực tiếp vào giá tour</p>
          </div>
        </div>
      </div>
    </div>

    <h4 class="text-center">Lịch trình</h4>
    <ScheduleDetail />
  </div>
</template>

<script>
import ScheduleDetail from "../components/ScheduleDetail.vue";
export default { components: { ScheduleDetail } };
</script>

<style lang="sass" scoped>
.rate
  border-radius: 5px
  background: #fdc432
  color: white
  font-weight: bold
  padding: 20px 30px
  font-size: 20px
  margin-right: 10px
.care-box
  border: 1px solid #00000043
  padding: 15px 40px
  margin: 0 0 10px 10px
  display: inline-block
</style>
